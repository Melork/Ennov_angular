import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-page-add-prestation',
  templateUrl: './page-add-prestation.component.html',
  styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {

  public titre: string;
  public soustitre: string;
  constructor(
    private ps: PrestationsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe((datas)=> {
      this.titre=datas.title;
      this.soustitre=datas.subtitle;
    })
  }

  public add(item: Prestation) {
    this.ps.add(item).subscribe((res) => {
      //this.router.navigate(['prestations']); //redicretion directe
      this.router.navigate(['../'], {relativeTo: this.route}); //redirection relative à partir de la route ou on est
    });
  }


}
