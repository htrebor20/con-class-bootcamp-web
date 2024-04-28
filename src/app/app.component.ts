import { Component, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'on-class-bootcamp';
  http = inject(HttpClient);

  changeTitle() {
    this.title = 'changed';
  }
}
