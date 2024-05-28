import { Component, OnInit } from '@angular/core';
import { BootcampService } from 'src/app/services/bootcamp/bootcamp.service';
import { CapabilityService } from 'src/app/services/capability/capability.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { TechnologyService } from 'src/app/services/technology/technology.service';
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

  modalIsOpen: boolean = false;
  response?: IGenericResponse;
  selectedItems: ISelectItem[] = []
  capabilitiesList: ISelectItem[] = [];
  
  constructor(private bootcampService: BootcampService, private serviceLoader: LoaderService, private capabilityService: CapabilityService) { }

  ngOnInit(): void {
    this.loadCapabilities()
  }
  
  loadCapabilities(): void {
    this.capabilityService.getCapability(0, 1000, "ASC").subscribe({
      next: (response: IPage<ICapability>) => {
        this.capabilitiesList = createSelectList(response.content);
        console.log( this.capabilitiesList);
      },
      error: (error: any) => {}
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
    this.closeModal();
    this.response = responseData;
  }
}
