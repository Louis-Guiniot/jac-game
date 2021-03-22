import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},
  { path: 'pagina-candidatura', loadChildren: () => import('./components/pagina-candidatura/pagina-candidatura.module').then(m => m.PaginaCandidaturaModule)},
<<<<<<< HEAD
  { path: 'dove-siamo', loadChildren: () => import('./components/dove-siamo/dove-siamo.module').then(m => m.DoveSiamoModule)}, 
 
=======
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)},
  { path: 'chi-siamo', loadChildren: () => import('./components/chi-siamo/chi-siamo.module').then(m => m.ChiSiamoModule)},
>>>>>>> origin/louis-pagina-candidatura
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
