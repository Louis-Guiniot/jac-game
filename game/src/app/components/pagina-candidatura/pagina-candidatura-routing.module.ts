import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaCandidaturaComponent } from './main/pagina-candidatura.component';

const routes: Routes = [{ path: '', component: PaginaCandidaturaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaCandidaturaRoutingModule { }
