import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { ButtonBadgeComponent } from './button-badge/button-badge.component';
import { EnvelopeComponent } from './envelope/envelope.component';
import { FlyerBrochureComponent } from './flyer-brochure/flyer-brochure.component';
import { FolderComponent } from './folder/folder.component';
import { HandfanComponent } from './handfan/handfan.component';
import { MagnetComponent } from './magnet/magnet.component';

const routes: Routes = [
  { path: 'businesscard', component: BusinessCardComponent },
  { path: 'flyer-brochure', component: FlyerBrochureComponent },
  { path: 'envelope', component: EnvelopeComponent },
  { path: 'bookmark', component: BookmarkComponent },
  { path: 'handfan', component: HandfanComponent },
  { path: 'button-badge', component: ButtonBadgeComponent },
  { path: 'folder', component: FolderComponent },
  { path: 'magnet', component: MagnetComponent },
  { path: '', component: BusinessCardComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled", anchorScrolling: "enabled" })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }