import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IGenericResponse } from '../../../utils/interfaces/http/httpInterfaces';
import { ITechnology } from '../../../utils/interfaces/technology/interfaces';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnoloyService {
 
  url: string = 'http://localhost:8090/technology';
  constructor(private httpService: HttpService) { }

  createTechnology(formData: ITechnology): Observable<IGenericResponse> {    
    return this.httpService.post(this.url, formData);    
  }
}
