import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageGameLvl3Page } from './page-game-lvl3.page';

const routes: Routes = [
  {
    path: '',
    component: PageGameLvl3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageGameLvl3PageRoutingModule {}
