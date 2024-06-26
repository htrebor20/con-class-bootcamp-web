import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LIST_SIZE, ORDER } from '../../../../utils/constants/constants';
import { ISelectItem } from '../../../../utils/interfaces/genericInterfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  selectSize: ISelectItem[] = LIST_SIZE;
  selectOrder: ISelectItem[] = ORDER

  @Input() listItems: any[] = []
  @Input() totalPages: number = NaN
  @Input() pageNumber: number = NaN
  @Input() isLoading: boolean = true
  @Input() orderBy: ISelectItem[] = []

  @Output() changedPage = new EventEmitter<number>();
  @Output() changedOrder = new EventEmitter<string>();
  @Output() changedOrderBy = new EventEmitter<string>();
  @Output() changedSize = new EventEmitter<number>();

  constructor() { }

  changePage(value: number) {
    this.changedPage.emit(value);
  }

  changeOrder(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.changedOrder.emit(value);
  }

  changeOrderBy(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.changedOrderBy.emit(value);
  }


  changeSize(event: Event) {
    const value = parseInt((event.target as HTMLSelectElement).value, 10);
    this.changedSize.emit(value);
  }
}
