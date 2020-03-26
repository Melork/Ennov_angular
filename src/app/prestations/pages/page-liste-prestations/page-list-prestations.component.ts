import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state-prestation.enum';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BtnRoute } from 'src/app/shared/interfaces/btn-route';
import { BtnHref } from 'src/app/shared/interfaces/btn-href';
import { BtnAction } from 'src/app/shared/interfaces/btn-action';

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
  public states = Object.values(State); // recup valeur d'Enum State dans tableau
  public btnAddPresta : BtnRoute;
  public btnLinkGoogle : BtnHref;
  public btnAction : BtnAction;

  constructor(
    private ps: PrestationsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.btnAddPresta = {
      texte : 'Add presta',
      route : 'add'
    };
    this.btnLinkGoogle = {
      texte : 'Google',
      href : 'https://www.google.fr'
    };
    this.btnAction = {
      texte : 'Action',
      action : true
    };
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
    this.route.data.subscribe((datas)=> {
      this.titre=datas.title;
      this.soustitre=datas.subtitle;
    });
  }
  changeState(item : Prestation, e){
    this.ps.changeState(item, e.target.value).subscribe((res) => {
      item.state= res.state;
    });
  }

  public openPopup() {
    console.log("Toto");

  }


}
