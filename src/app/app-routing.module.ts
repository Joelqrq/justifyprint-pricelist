import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessCardComponent } from './business-card/business-card.component';
import { FlyerBrochureComponent } from './flyer-brochure/flyer-brochure.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  { path: 'businesscard', component: BusinessCardComponent },
  { path: 'flyerbrochure', component: FlyerBrochureComponent },
  { path: '', component: BusinessCardComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
