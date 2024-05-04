import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/molecules/navbar/navbar.component';
import { MainTemplateComponent } from './components/templates/main-template/main-template.component';
import { SidebarComponent } from './components/molecules/sidebar/sidebar.component';
import { LoginTemplateComponent } from './components/templates/login-template/login-template.component';
import { AvatarComponent } from './components/atoms/avatar/avatar.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { LibraryComponent } from './components/pages/library/library.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TechnologyComponent } from './components/organisms/technology/technology.component';
import { CapabilityComponent } from './components/organisms/capability/capability.component';
import { BootcampComponent } from './components/organisms/bootcamp/bootcamp.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { ModalComponent } from './components/organisms/modal/modal.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { InputComponent } from './components/atoms/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainTemplateComponent,
    SidebarComponent,
    LoginTemplateComponent,
    AvatarComponent,
    LogoComponent,
    LibraryComponent,
    HomeComponent,
    TechnologyComponent,
    CapabilityComponent,
    BootcampComponent,
    ButtonComponent,
    ModalComponent,
    PageNotFoundComponent,
    InputComponent,
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
