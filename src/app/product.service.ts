import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDetails } from './details';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts(productUrls: string[]): Observable<IProduct[]> {
    const product$: Observable<IProduct>[] = productUrls.map(productUrl => {
      productUrl = "https://joelqrq.github.io/justifyprint-pricelist" + productUrl;
      return this.http.get(productUrl, { responseType: "text" })
        .pipe(
          map((content: string) => {
            const splitDatas: string[][] = content.split("\n")
              .filter((row: string) => row)
              .map((row: string) => row.split(","));

            const product: IProduct = {
              name: splitDatas.shift()?.shift(),
              attributes: splitDatas.shift(),
              datas: splitDatas
            };
            return product;
          })
        )
    });

    return forkJoin(product$);
  }

  getDetailsFiles(urls: string[]): Observable<IDetails[][]> {
    const files: Observable<IDetails[]>[] = urls.map((url: string) => {
      url = "https://joelqrq.github.io/justifyprint-pricelist" + url;
      return this.http.get<IDetails[]>(url, { responseType: "json" });
    });
    return forkJoin(files);
  }
}
