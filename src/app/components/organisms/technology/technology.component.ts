import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  modalIsOpen: boolean = false;


  openModal() {
    this.modalIsOpen = true;
  }

  closeModal() {
    this.modalIsOpen = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
