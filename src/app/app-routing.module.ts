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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
