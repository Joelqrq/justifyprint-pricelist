import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts(productUrls: string[]): Observable<IProduct>[] {
    return productUrls.map(productUrl => {
      productUrl = "https://joelqrq.github.io/justifyprint-pricelist" + productUrl;
      console.log(productUrl);
      return this.http.get(productUrl, { responseType: "text"})
      .pipe(
        map((content: string) => {
          const splitDatas: string[][] = content.split("\n").map((row: string) => row.split(","));
          const product: IProduct = {
            name: splitDatas.shift()[0],
            attributes: splitDatas.shift(),
            datas: splitDatas
          };
          return product;
        })
      )
    });
  }
}
