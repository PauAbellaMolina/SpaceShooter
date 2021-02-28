import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
// import { ComponentGameLvl1Component } from './component-game-lvl1/component-game-lvl1.component';

const routes: Routes = [
  {
    path: 'ca',
    loadChildren: () => import('./page-home/page-home.module').then( m => m.PageHomePageModule)
  },
  {
    path: 'es',
    loadChildren: () => import('./page-home/page-home.module').then( m => m.PageHomePageModule)
  },
  {
    path: 'en',
    loadChildren: () => import('./page-home/page-home.module').then( m => m.PageHomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./page-home/page-home.module').then( m => m.PageHomePageModule)
  },
  {
    path: 'play',
    loadChildren: () => import('./page-game-lvl1/page-game-lvl1.module').then( m => m.PageGameLvl1PageModule)
  },
  {
    path: 'ca/play',
    loadChildren: () => import('./page-game-lvl1/page-game-lvl1.module').then( m => m.PageGameLvl1PageModule)
  },
  {
    path: 'en/play',
    loadChildren: () => import('./page-game-lvl1/page-game-lvl1.module').then( m => m.PageGameLvl1PageModule)
  },
  {
    path: 'es/play',
    loadChildren: () => import('./page-game-lvl1/page-game-lvl1.module').then( m => m.PageGameLvl1PageModule)
  },
  {
    path: 'howToPlay',
    loadChildren: () => import('./page-how-to-play/page-how-to-play.module').then( m => m.PageHowToPlayPageModule)
  },
  {
    path: 'ca/howToPlay',
    loadChildren: () => import('./page-how-to-play/page-how-to-play.module').then( m => m.PageHowToPlayPageModule)
  },
  {
    path: 'en/howToPlay',
    loadChildren: () => import('./page-how-to-play/page-how-to-play.module').then( m => m.PageHowToPlayPageModule)
  },
  {
    path: 'es/howToPlay',
    loadChildren: () => import('./page-how-to-play/page-how-to-play.module').then( m => m.PageHowToPlayPageModule)
  },
  {
    path: 'ca/gameOver',
    loadChildren: () => import('./page-game-over/page-game-over.module').then( m => m.PageGameOverPageModule)
  },
  {
    path: 'en/gameOver',
    loadChildren: () => import('./page-game-over/page-game-over.module').then( m => m.PageGameOverPageModule)
  },
  {
    path: 'es/gameOver',
    loadChildren: () => import('./page-game-over/page-game-over.module').then( m => m.PageGameOverPageModule)
  },
  {
    path: 'ca/gameWon',
    loadChildren: () => import('./page-game-won/page-game-won.module').then( m => m.PageGameWonPageModule)
  },
  {
    path: 'en/gameWon',
    loadChildren: () => import('./page-game-won/page-game-won.module').then( m => m.PageGameWonPageModule)
  },
  {
    path: 'es/gameWon',
    loadChildren: () => import('./page-game-won/page-game-won.module').then( m => m.PageGameWonPageModule)
  },
  {
    path: 'play2',
    loadChildren: () => import('./page-game-lvl2/page-game-lvl2.module').then( m => m.PageGameLvl2PageModule)
  },
  {
    path: 'ca/play2',
    loadChildren: () => import('./page-game-lvl2/page-game-lvl2.module').then( m => m.PageGameLvl2PageModule)
  },
  {
    path: 'en/play2',
    loadChildren: () => import('./page-game-lvl2/page-game-lvl2.module').then( m => m.PageGameLvl2PageModule)
  },
  {
    path: 'es/play2',
    loadChildren: () => import('./page-game-lvl2/page-game-lvl2.module').then( m => m.PageGameLvl2PageModule)
  },
  {
    path: 'play3',
    loadChildren: () => import('./page-game-lvl3/page-game-lvl3.module').then( m => m.PageGameLvl3PageModule)
  },
  {
    path: 'ca/play3',
    loadChildren: () => import('./page-game-lvl3/page-game-lvl3.module').then( m => m.PageGameLvl3PageModule)
  },
  {
    path: 'en/play3',
    loadChildren: () => import('./page-game-lvl3/page-game-lvl3.module').then( m => m.PageGameLvl3PageModule)
  },
  {
    path: 'es/play3',
    loadChildren: () => import('./page-game-lvl3/page-game-lvl3.module').then( m => m.PageGameLvl3PageModule)
  },
  {
    path: 'levelSelect',
    loadChildren: () => import('./page-level-select/page-level-select.module').then( m => m.PageLevelSelectPageModule)
  },
  {
    path: 'ca/levelSelect',
    loadChildren: () => import('./page-level-select/page-level-select.module').then( m => m.PageLevelSelectPageModule)
  },
  {
    path: 'en/levelSelect',
    loadChildren: () => import('./page-level-select/page-level-select.module').then( m => m.PageLevelSelectPageModule)
  },
  {
    path: 'es/levelSelect',
    loadChildren: () => import('./page-level-select/page-level-select.module').then( m => m.PageLevelSelectPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
