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

  getVariants(variantUrls: string[]): Observable<IProduct[]> {
    const variants$: Observable<IProduct>[] = variantUrls.map(variantUrl => {
      variantUrl = "https://joelqrq.github.io/justifyprint-pricelist" + variantUrl;
      return this.http.get(variantUrl, { responseType: "text" })
        .pipe(
          map((content: string) => {
            const splitDatas: string[][] = content.split("\n")
              .filter((row: string) => row)
              .map((row: string) => row.split(","));

            const variant: IProduct = {
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

  getDetailsFiles(urls: string[]): Observable<IDetails[][]> {
    const files: Observable<IDetails[]>[] = urls.map((url: string) => {
      url = "https://joelqrq.github.io/justifyprint-pricelist" + url;
      return this.http.get<IDetails[]>(url, { responseType: "json" });
    });
    return forkJoin(files);
  }
}
