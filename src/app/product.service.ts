import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Details } from './details';
import { FileUrl } from './file-url';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrls: FileUrl[] = [
    {
      identifier: "business-card",
      urls: [
        "https://joelqrq.github.io/justifyprint-pricelist/business-card-tables/business-card.csv",
        "https://joelqrq.github.io/justifyprint-pricelist/business-card-tables/finishing.csv"
      ]
    },
    {
      identifier: "flyer-brochure",
      urls: [
        "https://joelqrq.github.io/justifyprint-pricelist/flyer-brochure-tables/A3.csv",
        "https://joelqrq.github.io/justifyprint-pricelist/flyer-brochure-tables/A4.csv",
        "https://joelqrq.github.io/justifyprint-pricelist/flyer-brochure-tables/A5.csv",
        "https://joelqrq.github.io/justifyprint-pricelist/flyer-brochure-tables/A6.csv",
        "https://joelqrq.github.io/justifyprint-pricelist/flyer-brochure-tables/DL.csv",
        "https://joelqrq.github.io/justifyprint-pricelist/flyer-brochure-tables/3xA4.csv",
        "https://joelqrq.github.io/justifyprint-pricelist/flyer-brochure-tables/4xA4.csv"
      ]
    }
  ];

  detailsUrls: FileUrl[] = [
    {
      identifier: "flyer-brochure",
      urls: ["https://joelqrq.github.io/justifyprint-pricelist/flyer-brochure-tables/custom.json"]
    }
  ]

  constructor(private http: HttpClient) { }

  getVariants(identifier: string): Observable<Product[]> {
    const productUrl: FileUrl | undefined = this.productUrls.find(url => {
      if (url.identifier === identifier)
        return url;
    });

    if (productUrl == undefined) {
      throw new Error(`${productUrl} variant identifier is not available!`);
    }

    const variants$: Observable<Product>[] = productUrl.urls.map((variantUrl: string) => {
      return this.http.get(variantUrl, { responseType: "text" })
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

    return forkJoin(variants$);
  }

  getDetailsFiles(identifier: string): Observable<Details[][]> {

    const detailsUrl: FileUrl | undefined = this.detailsUrls.find(url => {
      if(url.identifier === identifier)
        return url;
    });

    if(detailsUrl == undefined) {
      throw new Error(`${detailsUrl} details identifier is not available!`);
    }

    const files: Observable<Details[]>[] = detailsUrl.urls.map((url: string) => {
      return this.http.get<Details[]>(url, { responseType: "json" });
    });
    
    return forkJoin(files);
  }
}
