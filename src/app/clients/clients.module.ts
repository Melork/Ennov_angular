import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { FormClientComponent } from './components/form-client/form-client.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageListeClientsComponent } from './pages/page-liste-clients/page-liste-clients.component';



@NgModule({
  declarations: [PageListeClientsComponent, PageAddClientComponent, FormClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
