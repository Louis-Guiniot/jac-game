import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaPersonaleComponent } from './main/area-personale.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: AreaPersonaleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaPersonaleRoutingModule { }
