import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { createPopper, placements } from '@popperjs/core';
import { Observable } from 'rxjs';
import { IProduct } from '../product';

@Component({
  selector: 'jp-category-tab',
  templateUrl: './category-tab.component.html',
  styleUrls: ['./category-tab.component.scss']
})
export class CategoryTabComponent implements OnInit {

  @ViewChild('btnDropdown', { static: false, read: ElementRef }) btnDropdownRef: ElementRef | undefined;
  isShow = false;
  popper = document.createElement("div");
  @Input() pageUrl: string = "";
  @Input() variants$: Observable<IProduct[]> = new Observable<IProduct[]>();

  toggleDropdown(){
    if(this.isShow){
      this.isShow = false;
      this.destroyPopper();
    } else {
      this.isShow = true;
      this.showPopper();
    }
  }

  destroyPopper(){
    this.popper.parentNode?.removeChild(this.popper);
  }

  showPopper(){
    createPopper(this.btnDropdownRef?.nativeElement, this.popper, { placement: "bottom-start" } );
    this.btnDropdownRef?.nativeElement.parentNode.insertBefore(this.popper, this.btnDropdownRef.nativeElement.nextSibling);
  }

  constructor() { }

  ngOnInit(): void {
    this.popper.innerHTML = `<div class="bg-red-500 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48" #popoverDropdownRef>
    <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white">
      Action
    </a>
    <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white">
      Another action
    </a>
    <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white">
      Something else here
    </a>
    <div class="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25"></div>
    <a href="#pablo" class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white">
      Seprated link
    </a>
  </div>`;
  }

}
