import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {

  public titre: string;
  public soustitre: string;
  constructor(
    private ps: ClientsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe((datas)=> {
      this.titre=datas.title;
      this.soustitre=datas.subtitle;
    })
  }

  public add(item: Client) {
    this.ps.add(item).subscribe((res) => {
      //this.router.navigate(['prestations']); //redicretion directe
      this.router.navigate(['../'], {relativeTo: this.route}); //redirection relative à partir de la route ou on est
    });
  }

}
