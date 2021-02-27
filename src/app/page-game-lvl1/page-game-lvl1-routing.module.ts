import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageGameLvl1Page } from './page-game-lvl1.page';

const routes: Routes = [
  {
    path: '',
    component: PageGameLvl1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageGameLvl1PageRoutingModule {}
