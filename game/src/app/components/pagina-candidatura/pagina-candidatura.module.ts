import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaginaCandidaturaRoutingModule } from './pagina-candidatura-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaginaCandidaturaRoutingModule,
    SharedModule
  ]
})
export class PaginaCandidaturaModule { }
