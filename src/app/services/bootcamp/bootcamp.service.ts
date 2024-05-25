import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBootcamp } from 'src/utils/interfaces/bootcamp/ibootcamp';
import { IGenericResponse, IPage } from 'src/utils/interfaces/http/httpInterfaces';

@Injectable({
  providedIn: 'root'
})
export class BootcampService {

  url: string = `${environment.apiUrlBase}/bootcamp/`;
  constructor(private httpClient: HttpClient) { }

  createBootcamp(formData: IBootcamp): Observable<HttpResponse<IGenericResponse>> {
    return this.httpClient.post<IGenericResponse>(this.url, formData, {observe: 'response'} );
  }

  getBootcamp(pageNumber: number, pageSize: number, order: string): Observable<IPage<IBootcamp>> {

    let params = new HttpParams()
      .set('page', pageNumber.toString())
      .set('size', pageSize.toString())

    if (order) {
      params = params.set('sort', order);
      params = params.set('sortBy', "NAME");
    }

    return this.httpClient.get<IPage<IBootcamp>>(this.url, { params });
  }
}

