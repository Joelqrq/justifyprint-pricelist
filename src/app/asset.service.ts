import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private sanitize: DomSanitizer) { }

  getFile(url: string): SafeUrl {
     return this.sanitize.bypassSecurityTrustUrl("https://joelqrq.github.io/justifyprint-pricelist" + url);
  }
}
