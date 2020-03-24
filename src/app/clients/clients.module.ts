import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListeClientsComponent } from './pages/page-liste-clients/page-liste-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';



@NgModule({
  declarations: [PageListeClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
