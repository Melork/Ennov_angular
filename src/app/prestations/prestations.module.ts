import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FomePrestaComponent } from './components/fome-presta/fome-presta.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PageListPrestationsComponent } from './pages/page-liste-prestations/page-list-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { IconsModule } from '../icons/icons.module';
import { PageEditPrestationComponent } from './pages/page-edit-prestation/page-edit-prestation.component';



@NgModule({
  declarations: [PageListPrestationsComponent, PageAddPrestationComponent, FomePrestaComponent, PageEditPrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    IconsModule
  ]
})
export class PrestationsModule { }
