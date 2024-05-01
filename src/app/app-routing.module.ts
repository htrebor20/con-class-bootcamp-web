import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTemplateComponent } from './components/templates/main-template/main-template.component';
import { LoginTemplateComponent } from './components/templates/login-template/login-template.component';
import { LibraryComponent } from './components/pages/library/library.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginTemplateComponent },
  {
    path: '',
    component: MainTemplateComponent,
    children: [
      { path: 'library', component: LibraryComponent },
      { path: 'home', component: HomeComponent }
    ]
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
