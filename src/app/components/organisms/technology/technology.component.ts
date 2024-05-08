import { Component, OnInit } from '@angular/core';
import { IGenericResponse } from '../../../../utils/interfaces/http/httpInterfaces';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})

export class TechnologyComponent implements OnInit {
  modalIsOpen: boolean = false;
  response: IGenericResponse | null = null;

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
    this.response = null;
  }

  handleResponse(responseData: IGenericResponse) {
    this.closeModal();
    this.response = responseData;
  }

}
