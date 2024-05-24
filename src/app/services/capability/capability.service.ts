import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICapability } from 'src/utils/interfaces/capability/icapability';
import { IGenericResponse, IPage } from 'src/utils/interfaces/http/httpInterfaces';

@Injectable({
  providedIn: 'root'
})
export class CapabilityService {

  url: string = `${environment.apiUrlBase}/capability/`;
  constructor(private httpClient: HttpClient) { }

  createCapability(formData: ICapability): Observable<HttpResponse<IGenericResponse>> {
    return this.httpClient.post<IGenericResponse>(this.url, formData, {observe: 'response'} );
  }

  getCapability(pageNumber: number, pageSize: number, order: string): Observable<IPage<ICapability>> {

    let params = new HttpParams()
      .set('page', pageNumber.toString())
      .set('size', pageSize.toString())

    if (order) {
      params = params.set('sort', order);
      params = params.set('sortBy', "NAME");
    }

    return this.httpClient.get<IPage<ICapability>>(this.url, { params });
  }
}
