import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessCardComponent } from './business-card/business-card.component';
import { EnvelopeComponent } from './envelope/envelope.component';
import { FlyerBrochureComponent } from './flyer-brochure/flyer-brochure.component';

const routes: Routes = [
  { path: 'businesscard', component: BusinessCardComponent },
  { path: 'flyer-brochure', component: FlyerBrochureComponent },
  { path: 'envelope', component: EnvelopeComponent },
  { path: '', component: BusinessCardComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled", anchorScrolling: "enabled" })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }