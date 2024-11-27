import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioPageModule)
      },
      {
        path: 't-pteridofita',
        loadChildren: () => import('../t-pteridofita/t-pteridofita.module').then(m => m.TPteridofitaPageModule)
      },
      {
        path: 't-briofita',
        loadChildren: () => import('../t-briofita/t-briofita.module').then(m => m.TBriofitaPageModule)
      },
      {
        path: 't-gimnosperma',
        loadChildren: () => import('../t-gimnosperma/t-gimnosperma.module').then(m => m.TGimnospermaPageModule)
      },
      {
        path: 't-angiosperma',
        loadChildren: () => import('../t-angiosperma/t-angiosperma.module').then(m => m.TAngiospermaPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
