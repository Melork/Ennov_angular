import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { BtnAction } from 'src/app/shared/interfaces/btn-action';
import { BtnHref } from 'src/app/shared/interfaces/btn-href';
import { BtnRoute } from 'src/app/shared/interfaces/btn-route';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-liste-clients',
  templateUrl: './page-liste-clients.component.html',
  styleUrls: ['./page-liste-clients.component.scss']
})
export class PageListeClientsComponent implements OnInit {

  public collection$: Observable<Client[]>;
  public headers: string[];
  public titre: string;
  public soustitre: string;
  public states = Object.values(StateClient); // recup valeur d'Enum State dans tableau de string
  public btnAddClient: BtnRoute;
  public btnLinkGoogle: BtnHref;
  public btnAction: BtnAction;

  constructor(
    private ps: ClientsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.btnAddClient = {
      texte: 'Add client',
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
    this.collection$ = this.ps.collection;
    this.headers = [
      'Nom',
      'Email',
      'State'
    ];
    this.route.data.subscribe((datas) => {
      this.titre = datas.title;
      this.soustitre = datas.subtitle;
    });
  }
  changeState(item: Client, e) {
    this.ps.changeState(item, e.target.value).subscribe((res) => {
      item.state = res.state;
    });
  }

  public openPopup() {
    console.log("Toto");
  }

}
