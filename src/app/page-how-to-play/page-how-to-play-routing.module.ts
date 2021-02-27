import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageHowToPlayPage } from './page-how-to-play.page';

const routes: Routes = [
  {
    path: '',
    component: PageHowToPlayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageHowToPlayPageRoutingModule {}
