import { Component, OnInit } from '@angular/core';
import { BootcampService } from 'src/app/services/bootcamp/bootcamp.service';
import { CapabilityService } from 'src/app/services/capability/capability.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { BOOTCAMP_ORDER_BY } from 'src/utils/constants/constants';
import { IBootcamp } from 'src/utils/interfaces/bootcamp/ibootcamp';
import { ICapability } from 'src/utils/interfaces/capability/icapability';
import { ISelectItem } from 'src/utils/interfaces/genericInterfaces';
import { IGenericResponse, IPage } from 'src/utils/interfaces/http/httpInterfaces';
import { createSelectList } from 'src/utils/utils';

@Component({
  selector: 'app-bootcamp',
  templateUrl: './bootcamp.component.html',
  styleUrls: ['./bootcamp.component.scss']
})
export class BootcampComponent implements OnInit {
  bootcampList: IBootcamp[] = [];
  totalPages: number = NaN;
  isLoading: boolean = false;
  pageNumber: number = 1;
  orderBy: string = "";
  pageSize: number = 10;
  order: string = "";
  requestError: boolean = false
  modalIsOpen: boolean = false;
  firstLoad: boolean = true;
  response?: IGenericResponse;

  selectedItems: ISelectItem[] = []
  capabilitiesList: ISelectItem[] = [];

  orderByList: ISelectItem[] = BOOTCAMP_ORDER_BY;

  constructor(private bootcampService: BootcampService, private serviceLoader: LoaderService, private capabilityService: CapabilityService) {
    this.serviceLoader.isLoading$.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }

  ngOnInit(): void {
    this.loadBootcamp()
    this.loadCapabilities()
  }

  loadBootcamp(): void {
    this.bootcampService.getBootcamp(this.pageNumber - 1, this.pageSize, this.order, this.orderBy).subscribe({
      next: (response: IPage<IBootcamp>) => {
        this.bootcampList = response.content;
        this.totalPages = response.totalPages;
        this.firstLoad = false;
      },
      error: (error: any) => {
        this.requestError = true
        this.bootcampList = []
        this.firstLoad = false;
      }
    });
  }

  loadCapabilities(): void {
    this.capabilityService.getCapability(0, 1000, "ASC").subscribe({
      next: (response: IPage<ICapability>) => {
        this.capabilitiesList = createSelectList(response.content);
        console.log(this.capabilitiesList);
      },
      error: (error: any) => { }
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
    this.loadBootcamp()
    this.closeModal();
    this.response = responseData;
  }

  orderChanged(order: string): void {
    this.order = order;
    this.loadBootcamp()
  }

  sizeChanged(size: number): void {
    this.pageSize = size;
    this.pageNumber = 1;
    this.loadBootcamp()
  }

  pageChanged(page: number) {
    this.pageNumber = page;
    this.loadBootcamp()
  }

  orderChangedBy(orderBy: string): void {
    this.orderBy = orderBy;
    this.loadBootcamp()
  }
}