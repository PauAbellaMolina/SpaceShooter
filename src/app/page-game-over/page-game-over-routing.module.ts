import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageGameOverPage } from './page-game-over.page';

const routes: Routes = [
  {
    path: '',
    component: PageGameOverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageGameOverPageRoutingModule {}
