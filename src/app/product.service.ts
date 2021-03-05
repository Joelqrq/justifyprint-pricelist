import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import {  forkJoin, Observable } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import { Details } from './details';
import { FileUrl, VariantUrl } from './file-url';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly endpoint: string = "https://joelqrq.github.io/justifyprint-pricelist";
  private readonly singleProductUrls: FileUrl[] = [
    {
      identifier: "business-card",
      urls: [
        "/business-card-tables/business-card.csv",
        "/business-card-tables/finishing.csv"
      ]
    },
    {
      identifier: "flyer-brochure",
      urls: [
        "/flyer-brochure-tables/A3.csv",
        "/flyer-brochure-tables/A4.csv",
        "/flyer-brochure-tables/A5.csv",
        "/flyer-brochure-tables/A6.csv",
        "/flyer-brochure-tables/DL.csv",
        "/flyer-brochure-tables/3xA4.csv",
        "/flyer-brochure-tables/4xA4.csv",
      ]
    },
    {
      identifier: "bookmark",
      urls: [
        "/bookmark-tables/BM-B.csv",
        "/bookmark-tables/BM-C-D.csv",
        "/bookmark-tables/BM-E.csv"
      ]
    },
    {
      identifier: "envelope",
      urls: [
        "/envelope-tables/full-bleed-envelope.csv"
      ],
    },
    {
      identifier: "envelope-ready-made",
      urls: [
        "/envelope-tables/EV4090NW-102mm x 229mm.csv",
        "/envelope-tables/EV4090W-102mm x 229mm.csv",
        "/envelope-tables/EV4286NW-110mm x 220mm.csv",
        "/envelope-tables/EV4286W-110mm x 220mm.csv",
        "/envelope-tables/IS4286NW-110mm x 220mm.csv",
        "/envelope-tables/EV4496NW-114mm x 248mm.csv",
        "/envelope-tables/EV4496W-114mm x 248mm.csv",
        "/envelope-tables/EV6390NW-162mm x 229mm-(Fit A5 Size).csv",
        "/envelope-tables/IS6390NW-162mm x 229mm-(Fit A5 Size).csv",
        "/envelope-tables/EV7010NW-178mm x 254mm.csv",
        "/envelope-tables/EV8011NW-204mm x 280mm.csv",
        "/envelope-tables/EV9013NW-229mm x 324mm.csv",
        "/envelope-tables/EV1015NW-254mm x 381mm.csv",
        "/envelope-tables/OP6344NW-162mm x 114mm-(Fit A6 Size).csv",
        "/envelope-tables/OP6344W-162mm x 114mm-(Fit A6 Size).csv",
        "/envelope-tables/OP8642NW-220mm x 110mm-(Fit DL Size).csv",
        "/envelope-tables/OP8642W-220mm x 110mm-(Fit DL Size).csv",
        "/envelope-tables/IS9063NW-229mm x 162mm-(Fit A5 Size).csv"
      ]
    },
    {
      identifier: "button-badge",
      urls: [
        "/button-badge-tables/button-badge-price-list-32mm.csv",
        "/button-badge-tables/button-badge-price-list-44mm.csv",
        "/button-badge-tables/button-badge-price-list-58mm.csv"
      ]
    },
    {
      identifier: "folder",
      urls: [
        "/folder-tables/JCF1&2.csv",
        "/folder-tables/JCF3.csv",
        "/folder-tables/JCF4.csv",
        "/folder-tables/JCF5.csv",
        "/folder-tables/JCF6.csv",
        "/folder-tables/JCF7.csv"
      ]
    },
    {
      identifier: "handfan",
      urls: [
        "/handfan-tables/PFM-001.csv",
        "/handfan-tables/PFL-001.csv",
        "/handfan-tables/PFS-001&2&3.csv"
      ]
    }
  ];

  private readonly variantionProductUrls: VariantUrl[] = [
    {
      identifier: "envelope",
      urls: [
        "/envelope-tables/full-bleed-envelope.csv",
        "/bookmark-tables/BM-E.csv"
      ],
      variants: [
        {
          identifier: "EV4090",
          urls: [
            "/",
            "/2",
            "/3"
          ]
        },
        {
          identifier: "EV4286NW",
          urls: [
            "/"
          ]
        },
      ]
    }
  ];

  detailsUrls: FileUrl[] = [
    {
      identifier: "flyer-brochure",
      urls: ["/flyer-brochure-tables/custom.json"]
    }
  ]

  constructor(private http: HttpClient) { }

  getSingleProduct(identifier: string): Observable<Product[]> {
    const productUrl: FileUrl | undefined = this.singleProductUrls.find(url => {
      if (url.identifier === identifier)
        return url;
    });

    if (productUrl == undefined) {
      throw new Error(`${productUrl} variant identifier is not available!`);
    }

    const product$: Observable<Product>[] = productUrl.urls.map((url: string) => {

      url = this.endpoint + url;
      return this.http.get(url, { responseType: "text" })
        .pipe(
          map((content: string) => {
            const splitDatas: string[][] = content.split("\n")
              .filter((row: string) => row)
              .map((row: string) => row.split(","));

            const variant: Product = {
              name: splitDatas.shift()?.shift(),
              attributes: splitDatas.shift(),
              datas: splitDatas
            };
            return variant;
          })
        )
    });
    
    return forkJoin(product$);
  }

  
  getDetailsFiles(identifier: string): Observable<Details[][]> {

    const detailsUrl: FileUrl | undefined = this.detailsUrls.find(url => {
      if (url.identifier === identifier)
        return url;
    });

    if (detailsUrl == undefined) {
      throw new Error(`${detailsUrl} details identifier is not available!`);
    }

    const files: Observable<Details[]>[] = detailsUrl.urls.map((url: string) => {
      return this.http.get<Details[]>(this.endpoint + url, { responseType: "json" });
    });

    return forkJoin(files);
  }
}
