import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchComponent } from './home/search/search.component';

import {OmdbService} from './omdb.service';

import { Movie } from './movie';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ToolbarComponent,
    SearchComponent,
    WelcomeComponent,
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [OmdbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
