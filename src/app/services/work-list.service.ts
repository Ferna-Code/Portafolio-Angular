import { Injectable } from '@angular/core';
import { WorkModel } from '../models/work.model';
import { WORK } from '../../assets/files/mock-works';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class WorkListService {

    //obtenemos los datos de mock-works.ts
  work:WorkModel[] = WORK;
private worksUrl = 'api/works';

  constructor(private http: HttpClient) { }

  //devolvemos la informacion que se obtiene en la lista works
  // getWorks():WorkModel[]{
  //   return this.work;
  // }

  getWorks():Observable<WorkModel[]>{
    const works = of(WORK);//el dato que reciba este metodo es convertido a tipo observable
    //return this.http.get<WorkModel[]>(this.worksUrl);//simulamos la consulta a una url
    return works;
  }
 
}
