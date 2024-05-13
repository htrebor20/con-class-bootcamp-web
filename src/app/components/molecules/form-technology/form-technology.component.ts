import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

    this.form.markAllAsTouched();

    if (this.form.valid) {
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
  }

  getError(field: string): string {
    const errors = this.form.get(field)?.errors

    console.log("errores => ", errors)

    if (errors) {
      if (errors['required']) {
        return "El campo es requerido"
      }
      if (errors['maxlength']) {
        return "Longitud maxima es " + errors['maxlength'].requiredLength
      }
    }
    return ''
  }

  initForm(): FormGroup {
    const nameControl = this.fb.control('', [Validators.required, Validators.maxLength(50)]);
    const descControl = this.fb.control('', [Validators.required, Validators.maxLength(90)]);

    return this.fb.group({
      name: nameControl,
      description: descControl,
    })
  }
}

