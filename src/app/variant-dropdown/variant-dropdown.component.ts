import { ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { createPopper, Instance, VirtualElement } from '@popperjs/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'jp-variant-dropdown',
  templateUrl: './variant-dropdown.component.html',
  styleUrls: ['./variant-dropdown.component.scss'],
  host: { 'class': 'z-dropdown' },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VariantDropdownComponent implements OnInit, OnDestroy {

  @ViewChild('dropdownBtn', { static: false, read: ElementRef }) dropdownBtnRef: ElementRef<VirtualElement> | ElementRef | undefined;
  @ViewChild('dropdownPopper', { static: false, read: ElementRef }) popperRef: ElementRef | undefined;
  @Input() public readonly identifier: string | undefined;
  public readonly url$: Observable<UrlSegment[]> | undefined;
  public variants: Product[] | undefined;
  private variantsSub: Subscription | undefined;
  private popper: Instance | undefined;
  public isShow: boolean = false;

  toggleDropdown() {
    if (this.isShow) {
      this.isShow = false;
      this.destroyPopper();
    } else {
      this.isShow = true;
      this.showPopper();
    }
  }

  destroyPopper() {
    this.popperRef?.nativeElement.parentNode?.removeChild(this.popperRef?.nativeElement);
    this.popper?.destroy();
  }

  showPopper() {
    this.popper = createPopper(this.dropdownBtnRef?.nativeElement, this.popperRef?.nativeElement, { placement: "bottom-start" });
    this.dropdownBtnRef?.nativeElement.parentNode.insertBefore(this.popperRef?.nativeElement, this.dropdownBtnRef.nativeElement.nextSibling);
  }

  constructor(private readonly route: ActivatedRoute, private readonly productService: ProductService) {
    this.url$ = this.route.url.pipe(
      take<UrlSegment[]>(1)
    );
  }

  ngOnInit() {
    //Maybe can use route to activate a method to retrieve products & variants in the future
    if (this.identifier == undefined) {
      throw new Error("Category identifier is not available!");
    }
    this.variantsSub = this.productService.getSingleProduct(this.identifier).subscribe((variant: Product[]) => {
      this.variants = variant;
    });
  }

  ngOnDestroy(){
    this.variantsSub?.unsubscribe();
  }
}
