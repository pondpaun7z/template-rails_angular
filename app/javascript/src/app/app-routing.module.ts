import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SecondaryComponent } from './components/secondary/secondary.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'secondary', component: SecondaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
