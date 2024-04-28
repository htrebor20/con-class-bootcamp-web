import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTemplateComponent } from './components/templates/main-template/main-template.component';
import { LoginTemplateComponent } from './components/templates/login-template/login-template.component';
import { TechnologyComponent } from './components/pages/technology/technology.component';

const routes: Routes = [
  { path: '', redirectTo: 'technology', pathMatch: 'full' },
  { path: 'login', component: LoginTemplateComponent },
  {
    path: '',
    component: MainTemplateComponent,
    children: [
      { path: 'technology', component: TechnologyComponent }
    ]
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
