import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {LoginRoutingModule} from "./login-routing.module";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';




@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
