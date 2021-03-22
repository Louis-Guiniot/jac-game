import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DoveSiamoRoutingModule } from './dove-siamo';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DoveSiamoRoutingModule,
    SharedModule
  ]
})
export class DoveSiamoModule { }
