import { Component, OnInit } from '@angular/core';
import { CapabilityService } from 'src/app/services/capability/capability.service';
import { TechnologyService } from 'src/app/services/technology/technology.service';
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
  modalIsOpen: boolean = false;
  response?: IGenericResponse;

  selectedItems: ISelectItem[] = []
  technologiesList: ISelectItem[] = [];

  constructor(private capabilityService: CapabilityService, private technologyService: TechnologyService) {}

  ngOnInit(): void {
    this.loadTechnologies()
  }

  loadTechnologies(): void {
    this.technologyService.getTechnologies(0, 1000, "ASC").subscribe({
      next: (response: IPage<ITechnology>) => {
        this.technologiesList = createSelectList(response.content);
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
