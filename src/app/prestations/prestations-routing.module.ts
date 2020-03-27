import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageListPrestationsComponent } from './pages/page-liste-prestations/page-list-prestations.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PageEditPrestationComponent } from './pages/page-edit-prestation/page-edit-prestation.component';

const routes: Routes = [
  { path: '',
    component: PageListPrestationsComponent,
    data: {title: 'Prestation', subtitle: 'Toutes les prestations'}
  },
  { path: 'add',
    component: PageAddPrestationComponent,
    data: {title: 'Prestation', subtitle: 'Ajouter une prestation'}
  },
  { path: 'edit/:id',
    component: PageEditPrestationComponent,
    data: {title: 'Prestation', subtitle: 'Editer une prestation'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestationsRoutingModule { }
