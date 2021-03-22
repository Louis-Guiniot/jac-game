import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginGuardGuard } from './services/login-guard.guard';

const routes: Routes = [
   { path: '', redirectTo: '/login', pathMatch: 'full'},
   { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},
  { path: 'pagina-candidatura', loadChildren: () => import('./components/pagina-candidatura/pagina-candidatura.module').then(m => m.PaginaCandidaturaModule)},
  { path: 'login', component: LoginComponent, canActivate:[LoginGuardGuard]  },
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
