import { Component, OnInit } from '@angular/core';
import { BootcampService } from 'src/app/services/bootcamp/bootcamp.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { IGenericResponse } from 'src/utils/interfaces/http/httpInterfaces';

@Component({
  selector: 'app-bootcamp',
  templateUrl: './bootcamp.component.html',
  styleUrls: ['./bootcamp.component.scss']
})
export class BootcampComponent implements OnInit {

  modalIsOpen: boolean = false;
  response?: IGenericResponse;

  constructor(private bootcampService: BootcampService, private serviceLoader: LoaderService) { }

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
