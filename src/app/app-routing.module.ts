import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 't-briofita',
    loadChildren: () => import('./t-briofita/t-briofita.module').then( m => m.TBriofitaPageModule)
  },
  {
    path: 't-pteridofita',
    loadChildren: () => import('./t-pteridofita/t-pteridofita.module').then( m => m.TPteridofitaPageModule)
  },
  {
    path: 't-gimnosperma',
    loadChildren: () => import('./t-gimnosperma/t-gimnosperma.module').then( m => m.TGimnospermaPageModule)
  },
  {
    path: 't-angiosperma',
    loadChildren: () => import('./t-angiosperma/t-angiosperma.module').then( m => m.TAngiospermaPageModule)
  },
  {
    path: '',
    redirectTo: '/t-pteridofita',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/t-pteridofita'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
