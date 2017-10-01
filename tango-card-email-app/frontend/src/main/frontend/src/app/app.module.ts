import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { PageLayoutsModule } from './page-layouts/page-layouts.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import {BusyModule} from 'angular2-busy';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeService } from './services/home.service';
import { HttpClientIntercepter } from './http-client-intercepter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    PagesModule,
    PageLayoutsModule,
    RouterModule,
    NgbModule.forRoot(),
    HttpClientModule,
    BusyModule,
    BrowserAnimationsModule
  ],
  providers: [HomeService,{    provide: HTTP_INTERCEPTORS,
    useClass: HttpClientIntercepter,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
