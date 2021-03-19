import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},
  { path: 'pagina-candidatura', loadChildren: () => import('./components/pagina-candidatura/pagina-candidatura.module').then(m => m.PaginaCandidaturaModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
