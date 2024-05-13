import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoaderService } from '../loader/loader.service';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  private headers = {
    'Content-Type': 'application/json',
    'Authorization': environment.token
  };

  constructor(private readonly serviceLoader: LoaderService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.serviceLoader.show();
    
    const clonedRequest = request.clone({
      setHeaders: this.headers
    });
    
    return next.handle(clonedRequest).pipe(
      finalize(()=>this.serviceLoader.hide())
    );
  }
}
