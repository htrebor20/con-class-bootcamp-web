import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGenericResponse } from '../../../utils/interfaces/http/httpInterfaces';
import { ITechnology } from '../../../utils/interfaces/technology/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJBRE1JTiJdLCJzdWIiOiJyb2JlcnRAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTUxMjcwMjUsImV4cCI6MTcxNTczMTgyNX0.Vy-YzUA03NfwKzypVonyRc_HYxKCxOX4DwmxpvLt8a2Q3JUaI84SYj7yV2OGsRiUJvzcYsr6mUPk3ufZS2kPCw'
  }); 

  constructor(private httpClient: HttpClient) { }

  post(url: string, formData: ITechnology): Observable<any> {
    return this.httpClient.post<IGenericResponse>(url, formData, { headers: this.headers, observe: 'response' });
  }
}
