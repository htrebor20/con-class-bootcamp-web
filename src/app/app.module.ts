import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
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
import { ButtonIconComponent } from './components/atoms/button-icon/button-icon.component';
import { ListItemsComponent } from './components/molecules/list-items/list-items.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormTechnologyComponent } from './components/molecules/form-technology/form-technology.component';
import { ResponseMessageComponent } from './components/atoms/response-message/response-message.component';
import { CustomInterceptor } from './services/interceptor/custom.interceptor';
import { LoaderComponent } from './components/atoms/loader/loader.component';
import { PaginationComponent } from './components/atoms/pagination/pagination.component';
import { TableComponent } from './components/molecules/table/table.component';
import { FormCapabilityComponent } from './components/molecules/form-capability/form-capability.component';

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
    ButtonIconComponent,
    ListItemsComponent,
    FormTechnologyComponent,
    ResponseMessageComponent,
    LoaderComponent,
    PaginationComponent,
    TableComponent,
    FormCapabilityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
