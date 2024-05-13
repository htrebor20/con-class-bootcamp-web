import { Component, OnInit } from '@angular/core';
import { IGenericResponse } from '../../../../utils/interfaces/http/httpInterfaces';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})

export class TechnologyComponent implements OnInit {
  modalIsOpen: boolean = false;
  response?: IGenericResponse ;

  constructor() { }

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
