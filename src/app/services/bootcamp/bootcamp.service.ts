import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBootcamp } from 'src/utils/interfaces/bootcamp/ibootcamp';
import { IGenericResponse } from 'src/utils/interfaces/http/httpInterfaces';

@Injectable({
  providedIn: 'root'
})
export class BootcampService {

  url: string = `${environment.apiUrlBase}/bootcamp/`;
  constructor(private httpClient: HttpClient) { }

  createBootcamp(formData: IBootcamp): Observable<HttpResponse<IGenericResponse>> {
    return this.httpClient.post<IGenericResponse>(this.url, formData, {observe: 'response'} );
  }
}
