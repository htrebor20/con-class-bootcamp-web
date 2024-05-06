import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() title: string= "";
  @Input() buttonTitle: string= ""; 
  
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
