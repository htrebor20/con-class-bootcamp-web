import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTemplateComponent } from './components/templates/main-template/main-template.component';
import { LoginTemplateComponent } from './components/templates/login-template/login-template.component';
import { LibraryComponent } from './components/pages/library/library.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TechnologyComponent } from './components/organisms/technology/technology.component';
import { BootcampComponent } from './components/organisms/bootcamp/bootcamp.component';
import { CapabilityComponent } from './components/organisms/capability/capability.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginTemplateComponent },
  {
    path: '',
    component: MainTemplateComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'library',
        component: LibraryComponent,
        children: [
          { path: 'technology', component: TechnologyComponent },
          { path: 'capability', component: CapabilityComponent },
          { path: 'bootcamp', component: BootcampComponent },
        ]
      }
    ]
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
