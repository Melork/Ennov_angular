import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { State } from 'src/app/shared/enums/state-prestation.enum';
import { Prestation } from 'src/app/shared/models/prestation';
import { environment } from 'src/environments/environment';


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
        });
      })
    );
  }

  //get collection
  public get collection(): Observable<Prestation[]> {
    return this.pCollectiion;
  }
  //set collection
  public set collection(col: Observable<Prestation[]>) {
    this.pCollectiion = col;
  }

  //update state
  changeState(item: Prestation, state: State) {
    const newItem = new Prestation({ ...item });
    newItem.state = state;
    return this.update(newItem);

  }

  //updaten item
  update(item: Prestation) {
    return this.http.patch<Prestation>(`${this.urlApi}prestations/${item.id}`, item);
  }

  //add item
  add(item: Prestation) {
    return this.http.post<Prestation>(`${this.urlApi}prestations`, item).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  //delete item
  delete(item: Prestation) {
    return this.http.delete<Prestation>(`${this.urlApi}prestations/${item.id}`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  //get item
  getItemById(id : string) : Observable<Prestation>{
    return this.http.get<Prestation>(`${this.urlApi}prestations/${id}`);
  }
  private handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
