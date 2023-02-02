import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'main-pg',
    loadChildren: () =>
      import('./pages/main-pg/main-pg.module').then((m) => m.MainPgPageModule),
  },

  {
    path: 'second-pg/:username/:email',
    loadChildren: () =>
      import('./pages/second-pg/second-pg.module').then(
        (m) => m.SecondPgPageModule
      ),
  },
  {
    path: 'third-pg',
    loadChildren: () =>
      import('./pages/third-pg/third-pg.module').then(
        (m) => m.ThirdPgPageModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
