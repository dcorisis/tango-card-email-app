import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  declarations: [HeaderComponent, FooterComponent]
})
export class SharedModule { }
