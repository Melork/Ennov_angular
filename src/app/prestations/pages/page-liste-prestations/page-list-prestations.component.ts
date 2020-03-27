import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { State } from 'src/app/shared/enums/state-prestation.enum';
import { BtnAction } from 'src/app/shared/interfaces/btn-action';
import { BtnHref } from 'src/app/shared/interfaces/btn-href';
import { BtnRoute } from 'src/app/shared/interfaces/btn-route';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationsService } from '../../services/prestations.service';

@Component({
  selector: 'app-page-list-prestations',
  templateUrl: './page-list-prestations.component.html',
  styleUrls: ['./page-list-prestations.component.scss']
})
export class PageListPrestationsComponent implements OnInit {

  public collection$: BehaviorSubject<Prestation[]> = new BehaviorSubject(null);
  public headers: string[];
  public titre: string;
  public soustitre: string;
  public states = Object.values(State); // recup valeur d'Enum State dans tableau de string
  public btnAddPresta: BtnRoute;
  public btnLinkGoogle: BtnHref;
  public btnAction: BtnAction;

  constructor(
    private ps: PrestationsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.btnAddPresta = {
      texte: 'Add presta',
      route: 'add'
    };
    this.btnLinkGoogle = {
      texte: 'Google',
      href: 'https://www.google.fr'
    };
    this.btnAction = {
      texte: 'Action',
      action: true
    };
    this.ps.collection.subscribe((col) => {
      this.collection$.next(col);
    });

    this.headers = [
      'Type',
      'Client',
      'Nb Jours',
      'TjmHT',
      'Total HT',
      'Total TTC',
      'State',
      'Delete'
    ];
    this.route.data.subscribe((datas) => {
      this.titre = datas.title;
      this.soustitre = datas.subtitle;
    });
  }
  changeState(item: Prestation, e) {
    this.ps.changeState(item, e.target.value).subscribe((res) => {
      item.state = res.state;
    });
  }

  public openPopup() {
    console.log("Toto");
  }

  public deletePresta(item: Prestation) {
    this.ps.delete(item).subscribe((res) => {
      this.ps.collection.subscribe((col) => {
        this.collection$.next(col);
      });
    });
  }
}
