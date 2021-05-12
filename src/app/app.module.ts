import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { TableComponent } from './table/table.component';
import { VariantDropdownComponent } from './variant-dropdown/variant-dropdown.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { EnvelopeComponent } from './envelope/envelope.component';
import { FlyerBrochureComponent } from './flyer-brochure/flyer-brochure.component';
import { HandfanComponent } from './handfan/handfan.component';
import { FolderComponent } from './folder/folder.component';
import { ButtonBadgeComponent } from './button-badge/button-badge.component';
import { MagnetComponent } from './magnet/magnet.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    VariantDropdownComponent,
    BusinessCardComponent,
    FlyerBrochureComponent,
    EnvelopeComponent,
    BookmarkComponent,
    HandfanComponent,
    FolderComponent,
    ButtonBadgeComponent,
    MagnetComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
