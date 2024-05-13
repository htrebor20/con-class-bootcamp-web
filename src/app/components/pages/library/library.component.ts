import { Component, OnInit } from '@angular/core';
import {TABS_OPTIONS} from '../../../../utils/constants/constants'
import { ITabsItem } from '../../../../utils/interfaces/genericInterfaces';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  options: ITabsItem[] = TABS_OPTIONS;

  constructor() { }

  ngOnInit(): void {
  }

}
