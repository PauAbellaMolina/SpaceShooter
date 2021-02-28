import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageGameWonPage } from './page-game-won.page';

const routes: Routes = [
  {
    path: '',
    component: PageGameWonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageGameWonPageRoutingModule {}
