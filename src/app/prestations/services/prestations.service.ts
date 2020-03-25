import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private pCollectiion: Observable<Prestation[]>;
  private urlApi = environment.urlApi
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Prestation[]>(`${this.urlApi}prestations`).pipe(
      map((tab) => {
        return tab.map((obj) => { //map les obj de tab en Prestation
          return new Prestation(obj)
        })
      })
    );
  }

  //get collection
  public get collection(): Observable<Prestation[]> {
    return this.pCollectiion;
  }
  //set collection
  public set collection(col: Observable<Prestation[]>) {
    this.pCollectiion=col;
  }

  //update state

  //updaten item

  //add item

  //delete item


}
