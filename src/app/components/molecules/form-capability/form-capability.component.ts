import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CapabilityService } from 'src/app/services/capability/capability.service';
import { ISelectItem } from 'src/utils/interfaces/genericInterfaces';
import { IGenericResponse } from 'src/utils/interfaces/http/httpInterfaces';
import { getError, minArrayLengthValidator } from 'src/utils/utils';

@Component({
  selector: 'app-form-capability',
  templateUrl: './form-capability.component.html',
  styleUrls: ['./form-capability.component.scss']
})
export class FormCapabilityComponent implements OnInit {
  form: FormGroup = this.initForm()
  selectedTechnologies: ISelectItem[] = [];

  @Input() technologyList: ISelectItem[] = []
  @Output() responseStatus: EventEmitter<IGenericResponse> = new EventEmitter<IGenericResponse>();

  constructor(private readonly fb: FormBuilder, private capabilityService: CapabilityService) { }
  response!: IGenericResponse;
  ngOnInit(): void { }

  async onSubmit() {
    this.form.markAllAsTouched();
    console.log("this.form: ", this.form);
    if (this.form.valid) {
      const formData = this.form.value;
      formData.technologyIds = this.selectedTechnologies.map(item => item.value)

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

  getErrorMessage(field: string): string {
    console.log("field: ", field);
    return getError(field, this.form)
  }

  initForm(): FormGroup {
    const nameControl = this.fb.control('', [Validators.required, Validators.maxLength(50)]);
    const descControl = this.fb.control('', [Validators.required, Validators.maxLength(90)]);
    const techListControl = this.fb.control([], [minArrayLengthValidator(3)]);

    return this.fb.group({
      name: nameControl,
      description: descControl,
      technologyIds: techListControl,
    })
  }

  updateTechList(list: ISelectItem[]) {
    this.selectedTechnologies = list;
  }
}
