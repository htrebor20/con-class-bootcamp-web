import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CapabilityService } from 'src/app/services/capability/capability.service';
import { IGenericResponse } from 'src/utils/interfaces/http/httpInterfaces';

@Component({
  selector: 'app-form-capability',
  templateUrl: './form-capability.component.html',
  styleUrls: ['./form-capability.component.scss']
})
export class FormCapabilityComponent implements OnInit {

  form: FormGroup = this.initForm()

  @Output() responseStatus: EventEmitter<IGenericResponse> = new EventEmitter<IGenericResponse>();

  constructor(private readonly fb: FormBuilder, private capabilityService: CapabilityService) { }
  response!: IGenericResponse;
  ngOnInit(): void { }

  async onSubmit() {

    this.form.markAllAsTouched();

    if (this.form.valid) {
      const formData = this.form.value;
      // por ahora      
      formData.technologyIds =[1,2,3]
      console.log("formData: ", formData);
      
      this.capabilityService.createCapability(formData).subscribe({
        next: (response: HttpResponse<IGenericResponse>) => {
          this.responseStatus.emit({ status: response.status, message: "¡Capacidad creada!" });
        },
        error: (error: any) => {
          this.responseStatus.emit({ status: error.status, message: error.error?.message });
        }
      })
    }
  }

  getError(field: string): string {
    const errors = this.form.get(field)?.errors
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
