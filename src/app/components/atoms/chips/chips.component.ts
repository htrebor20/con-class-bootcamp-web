import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISelectItem } from '../../../../utils/interfaces/genericInterfaces';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {

  @Input() item: ISelectItem = { label: "", value: "" }

  @Output() close = new EventEmitter<ISelectItem>();
  constructor() { }

  onClose() {
    this.close.emit(this.item);
  }

  ngOnInit(): void {
  }

}
