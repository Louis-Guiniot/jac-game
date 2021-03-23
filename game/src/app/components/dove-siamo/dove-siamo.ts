import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoveSiamoComponent } from './main/dove-siamo.component';

const routes: Routes = [{ path: '', component: DoveSiamoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoveSiamoRoutingModule { }
