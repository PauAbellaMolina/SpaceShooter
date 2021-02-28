import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageLevelSelectPage } from './page-level-select.page';

const routes: Routes = [
  {
    path: '',
    component: PageLevelSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageLevelSelectPageRoutingModule {}
