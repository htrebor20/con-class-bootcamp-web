import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() icon: string = "";
  @Input() label: string = "";
  @Input() type: string = "button";
  
  constructor() { }

  ngOnInit(): void {
  }

}
