import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICapability } from 'src/utils/interfaces/capability/icapability';
import { IGenericResponse } from 'src/utils/interfaces/http/httpInterfaces';

@Injectable({
  providedIn: 'root'
})
export class CapabilityService {

  url: string = `${environment.apiUrlBase}/capability/`;
  constructor(private httpClient: HttpClient) { }

  createCapability(formData: ICapability): Observable<HttpResponse<IGenericResponse>> {
    return this.httpClient.post<IGenericResponse>(this.url, formData, {observe: 'response'} );
  }
}
