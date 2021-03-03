import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  private readonly endpoint: string = "https://joelqrq.github.io/justifyprint-pricelist";

  constructor(private sanitize: DomSanitizer) { }

  getFile(url: string): SafeUrl {
     return this.sanitize.bypassSecurityTrustUrl(this.endpoint + url);
  }
}
