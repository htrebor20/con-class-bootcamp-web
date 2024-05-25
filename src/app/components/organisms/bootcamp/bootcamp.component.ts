import { Component, OnInit } from '@angular/core';
import { BootcampService } from 'src/app/services/bootcamp/bootcamp.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { IBootcamp } from 'src/utils/interfaces/bootcamp/ibootcamp';
import { IGenericResponse, IPage } from 'src/utils/interfaces/http/httpInterfaces';

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
  pageSize: number = 10;
  order: string = "";
  requestError: boolean = false
  modalIsOpen: boolean = false;
  firstLoad: boolean = true;
  response?: IGenericResponse;
 
  constructor(private bootcampService: BootcampService, private serviceLoader: LoaderService) {
    this.serviceLoader.isLoading$.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }

  ngOnInit(): void {
    this.loadBootcamp()
  }

  loadBootcamp(): void {
    this.bootcampService.getBootcamp(this.pageNumber - 1, this.pageSize, this.order).subscribe({
      next: (response: IPage<IBootcamp>) => {
        this.bootcampList = response.content;
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
}