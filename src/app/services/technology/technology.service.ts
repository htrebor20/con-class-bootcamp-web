import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGenericResponse, IPage } from '../../../utils/interfaces/http/httpInterfaces';
import { ITechnology } from '../../../utils/interfaces/technology/interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  url: string = `${environment.apiUrlBase}/technology/`;
  constructor(private httpClient: HttpClient) { }

  createTechnology(formData: ITechnology): Observable<HttpResponse<IGenericResponse>> {
    return this.httpClient.post<IGenericResponse>(this.url, formData, {observe: 'response'} );
  }

  getTechnologies(pageNumber: number, pageSize: number, order: string): Observable<IPage<ITechnology>> {

    let params = new HttpParams()
      .set('page', pageNumber.toString())
      .set('size', pageSize.toString())

    if (order) {
      params = params.set('sort', order);
      params = params.set('sortBy', "NAME");
    }

    return this.httpClient.get<IPage<ITechnology>>(this.url, { params });
  }
}
