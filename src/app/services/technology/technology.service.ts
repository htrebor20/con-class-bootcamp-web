import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGenericResponse } from '../../../utils/interfaces/http/httpInterfaces';
import { ITechnology } from '../../../utils/interfaces/technology/interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService { 
  url: string = `${environment.apiUrlBase}/technology`;
  constructor(private httpClient: HttpClient) { }

  createTechnology(formData: ITechnology): Observable<IGenericResponse> {    
    return this.httpClient.post<IGenericResponse>(this.url, formData);    
  }

  getTechnologies(): Observable<ITechnology[]> {    
    return this.httpClient.get<ITechnology[]>(this.url);    
  }
}
