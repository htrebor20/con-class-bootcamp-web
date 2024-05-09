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
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJBRE1JTiJdLCJzdWIiOiJyb2JlcnRAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTUxMjcwMjUsImV4cCI6MTcxNTczMTgyNX0.Vy-YzUA03NfwKzypVonyRc_HYxKCxOX4DwmxpvLt8a2Q3JUaI84SYj7yV2OGsRiUJvzcYsr6mUPk3ufZS2kPCw'
  }); 

  response!: IGenericResponse;
  url: string = 'http://localhost:8090/technology';
  constructor(private httpService: HttpService) { }

  createTechnology(formData: ITechnology): Observable<IGenericResponse> {    
    return this.httpService.post(this.url, formData);    
  }
}
