import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui.component';
import { NaavComponent } from '../nav/naav.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';



@NgModule({
  declarations: [UiComponent, HeaderComponent, NaavComponent, FooterComponent],
  exports: [UiComponent],
  imports: [
    CommonModule
  ]
})
export class UiModule { }
