import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListPrestationsComponent } from './pages/page-liste-prestations/page-list-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PageListPrestationsComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule
  ]
})
export class PrestationsModule { }
