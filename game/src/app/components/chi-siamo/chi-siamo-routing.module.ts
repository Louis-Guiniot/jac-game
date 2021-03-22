import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiSiamoComponent } from './main/chi-siamo.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [{ path: '', component: ChiSiamoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChiSiamoRoutingModule { }
