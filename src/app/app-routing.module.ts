import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'anime-detail',
    loadChildren: () => import('./pages/anime-detail/anime-detail.module').then( m => m.AnimeDetailPageModule)
  },
  { 
    path: 'anime-detail/:id', 
    loadChildren: () => import('./pages/anime-detail/anime-detail.module').then(m => m.AnimeDetailPageModule) 
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
