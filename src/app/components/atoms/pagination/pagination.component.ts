import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  pages: number[] = [];
  math = Math;

  @Input() currentPage: number = 1;
  @Input() totalPages: number = NaN;
  @Output() pageChanged = new EventEmitter<number>();
  
  constructor() {}

  ngOnInit(): void {
    this.createArray()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalPages'] && !changes['totalPages'].firstChange) {
      this.createArray();
    }
  }

  createArray(): void {
    this.pages = Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }  

  changePage(page: number) {
    this.pageChanged.emit(page);
  }

  goBack() {
    if (this.currentPage > 1) {
      this.changePage(this.currentPage - 1);
    }
  }

  goNext() {
    if (this.currentPage < this.totalPages) {
      this.changePage(this.currentPage + 1);
    }
  }



}
