import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  @Input() title: string= "";
  @Input() subtitle: string= "";
   
  constructor() { }
  
  ngOnInit(): void {
  }
}
