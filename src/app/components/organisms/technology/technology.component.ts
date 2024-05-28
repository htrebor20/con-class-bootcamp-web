import { Component, OnInit } from '@angular/core';
import { IGenericResponse, IPage } from '../../../../utils/interfaces/http/httpInterfaces';
import { TechnologyService } from '../../../services/technology/technology.service'
import { ITechnology } from '../../../../utils/interfaces/technology/interfaces';
import { LoaderService } from '../../../services/loader/loader.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})

export class TechnologyComponent implements OnInit {
  technologiesList: ITechnology[] = [];
  totalPages: number = NaN;
  isLoading: boolean = false;
  pageNumber: number = 1;
  pageSize: number = 10;
  order: string = "";
  requestError: boolean = false
  modalIsOpen: boolean = false;
  firstLoad: boolean = true;
  response?: IGenericResponse;
 
  constructor(private technologyService: TechnologyService, private serviceLoader: LoaderService) {
    this.serviceLoader.isLoading$.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }

  ngOnInit(): void {
    this.loadTechnologies()
  }

  loadTechnologies(): void {
    this.technologyService.getTechnologies(this.pageNumber - 1, this.pageSize, this.order).subscribe({
      next: (response: IPage<ITechnology>) => {
        this.technologiesList = response.content;
        this.totalPages = response.totalPages;
        this.firstLoad = false;
      },
      error: (error: any) => {
        this.requestError = true
        this.firstLoad = false;
        this.technologiesList = []
      }
    });
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
    this.loadTechnologies()
    this.closeModal();
    this.response = responseData;
  }

  orderChanged(order: string): void {
    this.order = order;
    this.loadTechnologies()
  }

  sizeChanged(size: number): void {
    this.pageSize = size;
    this.pageNumber = 1;
    this.loadTechnologies()
  }

  pageChanged(page: number) {
    this.pageNumber = page;
    this.loadTechnologies()
  }

}
