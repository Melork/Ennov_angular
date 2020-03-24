import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageListeClientsComponent } from './pages/page-liste-clients/page-liste-clients.component';

const routes: Routes = [
  { path: '', component: PageListeClientsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
