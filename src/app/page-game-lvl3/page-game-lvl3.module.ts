import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageGameLvl3PageRoutingModule } from './page-game-lvl3-routing.module';

import { PageGameLvl3Page } from './page-game-lvl3.page';

import { ComponentGameLvl3Component } from '../component-game-lvl3/component-game-lvl3.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageGameLvl3PageRoutingModule
  ],
  declarations: [PageGameLvl3Page, ComponentGameLvl3Component]
})
export class PageGameLvl3PageModule {}
