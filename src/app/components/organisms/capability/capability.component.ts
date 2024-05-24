import { Component, OnInit } from '@angular/core';
import { CapabilityService } from 'src/app/services/capability/capability.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { ICapability } from 'src/utils/interfaces/capability/icapability';
import { IGenericResponse, IPage } from 'src/utils/interfaces/http/httpInterfaces';

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
  requestError: boolean = false
  modalIsOpen: boolean = false;
  firstLoad: boolean = true;
  response?: IGenericResponse;

  constructor(private capabilityService: CapabilityService, private serviceLoader: LoaderService) {
    this.serviceLoader.isLoading$.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }

  ngOnInit(): void {
    this.loadCapabilities()
  }

  loadCapabilities(): void {
    this.capabilityService.getCapability(this.pageNumber - 1, this.pageSize, this.order).subscribe({
      next: (response: IPage<ICapability>) => {
        this.capabilitiesList = response.content;
        this.totalPages = response.totalPages;
        this.firstLoad = false;
      },
      error: (error: any) => {
        this.requestError = true
        this.firstLoad = false;
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
