import { Component, OnInit } from '@angular/core';
import { SIDEBAR_OPTIONS } from '../../../../utils/constants/constants'
import { ISidebarItem } from '../../../../utils/interfaces/genericInterfaces';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  options: ISidebarItem[] = SIDEBAR_OPTIONS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
