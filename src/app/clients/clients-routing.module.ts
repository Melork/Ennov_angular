import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageListeClientsComponent } from './pages/page-liste-clients/page-liste-clients.component';

const routes: Routes = [
  { path: '',
    component: PageListeClientsComponent,
    data: {title: 'Clients', subtitle: 'Tous les clients'}
  },
  { path: 'add',
    component: PageAddClientComponent,
    data: {title: 'Clients', subtitle: 'Ajouter les clients'}
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
