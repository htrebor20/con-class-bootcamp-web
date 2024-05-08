import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IGenericResponse } from '../../../../utils/interfaces/http/httpInterfaces';

@Component({
  selector: 'app-form-technology',
  templateUrl: './form-technology.component.html',
  styleUrls: ['./form-technology.component.scss']
})
export class FormTechnologyComponent implements OnInit {

  form: FormGroup = this.initForm()

  @Output() responseStatus: EventEmitter<IGenericResponse> = new EventEmitter<IGenericResponse>();

  constructor(private readonly fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void { }

  onSubmit(): void {
    const formData = this.form.value;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJBRE1JTiJdLCJzdWIiOiJyb2JlcnRAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTUxMjcwMjUsImV4cCI6MTcxNTczMTgyNX0.Vy-YzUA03NfwKzypVonyRc_HYxKCxOX4DwmxpvLt8a2Q3JUaI84SYj7yV2OGsRiUJvzcYsr6mUPk3ufZS2kPCw'
    });

    this.http.post<IGenericResponse>('http://localhost:8090/technology', formData, { headers, observe: 'response' }).subscribe({
      next: (response: HttpResponse<IGenericResponse>) => {
        this.responseStatus.emit({ status: response.status, message: "¡Tecnología creada!" });
      },
      error: (error) => {
        this.responseStatus.emit({ status: error.status, message: error.error?.message });
      }
    })
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: [''],
      description: [''],
    })
  }

}
