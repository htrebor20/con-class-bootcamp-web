import { Component, OnInit } from '@angular/core';
import { CapabilityService } from 'src/app/services/capability/capability.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { IGenericResponse } from 'src/utils/interfaces/http/httpInterfaces';

@Component({
  selector: 'app-capability',
  templateUrl: './capability.component.html',
  styleUrls: ['./capability.component.scss']
})
export class CapabilityComponent implements OnInit {
  modalIsOpen: boolean = false;
  response?: IGenericResponse;

  constructor(private capabilityService: CapabilityService, private serviceLoader: LoaderService) {}

  ngOnInit(): void {
  }

  openModal() {
    this.modalIsOpen = true;
  }

  closeModal() {
    this.modalIsOpen = false;
  }

  closeResponseModal() {
    this.response = undefined;
  }

  handleResponse(responseData: IGenericResponse) {
    this.closeModal();
    this.response = responseData;
  }
}
