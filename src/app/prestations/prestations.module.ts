import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FomePrestaComponent } from './components/fome-presta/fome-presta.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PageListPrestationsComponent } from './pages/page-liste-prestations/page-list-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [PageListPrestationsComponent, PageAddPrestationComponent, FomePrestaComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    IconsModule
  ]
})
export class PrestationsModule { }
