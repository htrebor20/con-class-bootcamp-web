import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IGenericResponse } from '../../../../utils/interfaces/http/httpInterfaces';
import { TechnoloyService } from '../../../services/technology/technoloy.service';

@Component({
  selector: 'app-form-technology',
  templateUrl: './form-technology.component.html',
  styleUrls: ['./form-technology.component.scss']
})
export class FormTechnologyComponent implements OnInit {

  form: FormGroup = this.initForm()

  @Output() responseStatus: EventEmitter<IGenericResponse> = new EventEmitter<IGenericResponse>();

  constructor(private readonly fb: FormBuilder, private technologyService: TechnoloyService) { }
  response!: IGenericResponse;
  ngOnInit(): void { }

  async onSubmit() {
    const formData = this.form.value;
    this.technologyService.createTechnology(formData).subscribe({
      next: (response: IGenericResponse) => {
        this.responseStatus.emit({ status: response.status, message: "¡Tecnología creada!" });
      },
      error: (error: any) => {
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
