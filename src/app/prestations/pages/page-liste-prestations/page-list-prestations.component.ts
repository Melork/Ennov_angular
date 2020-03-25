import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state-prestation.enum';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-list-prestations',
  templateUrl: './page-list-prestations.component.html',
  styleUrls: ['./page-list-prestations.component.scss']
})
export class PageListPrestationsComponent implements OnInit {

  public collection$: Observable<Prestation[]>;
  public headers:string[];
  public titre: string;
  public soustitre: string;
  // public states = State;
  public states = Object.values(State); //
  constructor(private ps: PrestationsService) { }

  ngOnInit(): void {
    this.collection$ = this.ps.collection;
    this.headers=[
      'Type',
      'Client',
      'Nb Jours',
      'TjmHT',
      'Total HT',
      'Total TTC',
      'State'
    ];
    this.titre='Prestations';
    this.soustitre='Toutes les prestations';
  }
  changeState(item : Prestation, e){
    this.ps.changeState(item, e.target.value).subscribe((res) => {
      item.state= res.state;
    });
  }


}
