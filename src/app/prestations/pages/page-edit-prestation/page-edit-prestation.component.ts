import { Component, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationsService } from '../../services/prestations.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-edit-prestation',
  templateUrl: './page-edit-prestation.component.html',
  styleUrls: ['./page-edit-prestation.component.scss']
})
export class PageEditPrestationComponent implements OnInit {

  public titre: string;
  public soustitre: string;
  public item$: Observable<Prestation>;
  constructor(
    private ps: PrestationsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe((datas)=> {
      this.titre=datas.title;
      this.soustitre=datas.subtitle;
    });
    this.item$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.ps.getItemById(params.get('id'))
      })
    );
  }

  public edit(item: Prestation) {
    this.ps.update(item).subscribe((res) => {
      //this.router.navigate(['prestations']); //redicretion directe
      this.router.navigate(['../../'], {relativeTo: this.route}); //redirection relative à partir de la route ou on est
    });
  }

}
