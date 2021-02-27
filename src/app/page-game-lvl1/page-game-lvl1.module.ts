import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageGameLvl1PageRoutingModule } from './page-game-lvl1-routing.module';

import { PageGameLvl1Page } from './page-game-lvl1.page';

import { ComponentGameLvl1Component } from '../component-game-lvl1/component-game-lvl1.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageGameLvl1PageRoutingModule,
  ],
  declarations: [PageGameLvl1Page, ComponentGameLvl1Component]
})
export class PageGameLvl1PageModule {}
