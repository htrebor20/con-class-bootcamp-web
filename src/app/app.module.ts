import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/molecules/navbar/navbar.component';
import { MainTemplateComponent } from './components/templates/main-template/main-template.component';
import { SidebarComponent } from './components/molecules/sidebar/sidebar.component';
import { TechnologyComponent } from './components/pages/technology/technology.component';
import { LoginTemplateComponent } from './components/templates/login-template/login-template.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainTemplateComponent,
    SidebarComponent,
    //PAGES
    TechnologyComponent,
    LoginTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
