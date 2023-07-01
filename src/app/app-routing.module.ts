import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementsComponent } from './departement/departements/departements.component';
import { CommunesComponent } from './commune/communes/communes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { path: 'departements', component: DepartementsComponent },
  { path: 'communes', component: CommunesComponent },
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
