import { Component, OnInit } from '@angular/core';
import { IGenericResponse } from '../../../../utils/interfaces/http/httpInterfaces';
import { TechnologyService } from '../../../services/technology/technology.service'
import { ITechnology } from '../../../../utils/interfaces/technology/interfaces';
import { LoaderService } from '../../../services/loader/loader.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})

export class TechnologyComponent implements OnInit {
  technologiesList: ITechnology[] = []
  requestError: boolean = false
  modalIsOpen: boolean = false;
  response?: IGenericResponse ;
  isLoading: boolean = false;

  constructor(private technologyService: TechnologyService, private readonly serviceLoader: LoaderService) {
    this.serviceLoader.isLoading$.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }

  ngOnInit(): void {
    this.technologyService.getTechnologies().subscribe({
      next: (response: ITechnology[]) => {
        this.technologiesList = response
      },
      error: (error: any) => {
        this.requestError = true
      }
    })
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
