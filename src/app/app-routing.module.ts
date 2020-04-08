import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'user', component: UserComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
