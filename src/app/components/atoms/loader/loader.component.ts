import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  isLoading: boolean = false;

  constructor(private readonly serviceLoader: LoaderService) {
    this.serviceLoader.isLoading$.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }
}
