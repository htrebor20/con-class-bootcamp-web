import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BootcampService } from 'src/app/services/bootcamp/bootcamp.service';
import { ISelectItem } from 'src/utils/interfaces/genericInterfaces';
import { IGenericResponse } from 'src/utils/interfaces/http/httpInterfaces';
import { getError, minArrayLengthValidator } from 'src/utils/utils';

@Component({
  selector: 'app-form-bootcamp',
  templateUrl: './form-bootcamp.component.html',
  styleUrls: ['./form-bootcamp.component.scss']
})
export class FormBootcampComponent implements OnInit {
  form: FormGroup = this.initForm()
  selectedCapabilities: ISelectItem[] = [];


  @Input() capabilityList: ISelectItem[] = []
  @Output() responseStatus: EventEmitter<IGenericResponse> = new EventEmitter<IGenericResponse>();

  constructor(private readonly fb: FormBuilder, private bootcampService: BootcampService) { }
  response!: IGenericResponse;
  ngOnInit(): void { }

  async onSubmit() {

    this.form.markAllAsTouched();

    if (this.form.valid) {
      const formData = this.form.value;
      formData.capabilityIds = this.selectedCapabilities.map(item => item.value)

      this.bootcampService.createBootcamp(formData).subscribe({
        next: (response: HttpResponse<IGenericResponse>) => {
          this.responseStatus.emit({ status: response.status, message: "¡Bootcamp creado!" });
        },
        error: (error: any) => {
          this.responseStatus.emit({ status: error.status, message: error.error?.message });
        }
      })
    }
  }
 
  getErrorMessage(field: string): string {
    return getError(field, this.form)
  }

  initForm(): FormGroup {
    const nameControl = this.fb.control('', [Validators.required, Validators.maxLength(50)]);
    const descControl = this.fb.control('', [Validators.required, Validators.maxLength(90)]);
    const capabilityListControl = this.fb.control([], [minArrayLengthValidator(1)]);

    return this.fb.group({
      name: nameControl,
      description: descControl,
      capabilityIds: capabilityListControl,
    })
  }

  updateCapabilityList(list: ISelectItem[]) {
    this.selectedCapabilities = list;
  }

}
