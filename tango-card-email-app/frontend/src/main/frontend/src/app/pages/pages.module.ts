import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  ReactiveFormsModule } from '@angular/forms';
import {BusyModule} from 'angular2-busy';
import { NewMailComponent } from './new-mail/new-mail.component';
import { AboutComponent } from './about/about.component';
import { MailHistoryComponent } from './mail-history/mail-history.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BusyModule
  ],
  declarations: [HomeComponent, NewMailComponent, AboutComponent, MailHistoryComponent]
})
export class PagesModule { }
