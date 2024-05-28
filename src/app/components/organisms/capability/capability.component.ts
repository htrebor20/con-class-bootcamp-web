import { Component, Input, OnInit } from '@angular/core';
import { CapabilityService } from 'src/app/services/capability/capability.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { TechnologyService } from 'src/app/services/technology/technology.service';
import { CAPABILITY_ORDER_BY } from 'src/utils/constants/constants';
import { ICapability } from 'src/utils/interfaces/capability/icapability';
import { ISelectItem } from 'src/utils/interfaces/genericInterfaces';
import { IGenericResponse, IPage } from 'src/utils/interfaces/http/httpInterfaces';
import { ITechnology } from 'src/utils/interfaces/technology/interfaces';
import { createSelectList } from 'src/utils/utils';

@Component({
  selector: 'app-capability',
  templateUrl: './capability.component.html',
  styleUrls: ['./capability.component.scss']
})
export class CapabilityComponent implements OnInit {
  capabilitiesList: ICapability[] = [];
  totalPages: number = 0;
  isLoading: boolean = false;
  pageNumber: number = 1;
  pageSize: number = 10;
  order: string = "";
  orderBy: string = "";
  requestError: boolean = false
  modalIsOpen: boolean = false;
  firstLoad: boolean = true;
  response?: IGenericResponse;
  selectedItems: ISelectItem[] = []
  technologiesList: ISelectItem[] = [];

  orderByList: ISelectItem[] = CAPABILITY_ORDER_BY;

  constructor(private capabilityService: CapabilityService, private serviceLoader: LoaderService, private technologyService: TechnologyService) {
    this.serviceLoader.isLoading$.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }

  ngOnInit(): void {
    this.loadTechnologies()
    this.loadCapabilities()
  }

  loadTechnologies(): void {
    this.technologyService.getTechnologies(0, 1000, "ASC").subscribe({
      next: (response: IPage<ITechnology>) => {
        this.technologiesList = createSelectList(response.content);
      },
      error: (error: any) => { }
    });
  }

  loadCapabilities(): void {
    this.capabilityService.getCapability(this.pageNumber - 1, this.pageSize, this.order, this.orderBy).subscribe({
      next: (response: IPage<ICapability>) => {
        this.capabilitiesList = response.content;
        this.totalPages = response.totalPages;
        this.firstLoad = false;
      },
      error: (error: any) => {
        this.requestError = true
        this.firstLoad = false;
        this.capabilitiesList = []
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
    this.loadCapabilities()
    this.closeModal();
    this.response = responseData;
  }

  orderChanged(order: string): void {
    this.order = order;
    this.loadCapabilities()
  }

  orderChangedBy(orderBy: string): void {
    this.orderBy = orderBy;
    this.loadCapabilities()
  }

  sizeChanged(size: number): void {
    this.pageSize = size;
    this.pageNumber = 1;
    this.loadCapabilities()
  }

  pageChanged(page: number) {
    this.pageNumber = page;
    this.loadCapabilities()
  }

}
