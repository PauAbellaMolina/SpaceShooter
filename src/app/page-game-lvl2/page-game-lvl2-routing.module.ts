import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageGameLvl2Page } from './page-game-lvl2.page';

const routes: Routes = [
  {
    path: '',
    component: PageGameLvl2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageGameLvl2PageRoutingModule {}
