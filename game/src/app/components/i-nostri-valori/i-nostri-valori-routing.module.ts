import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { INostriValoriComponent } from './main/i-nostri-valori.component';


const routes: Routes = [{ path: '', component: INostriValoriComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class INostriValoriRoutingModule { }
