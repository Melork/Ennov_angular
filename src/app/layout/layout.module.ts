import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaavComponent } from './components/naav/naav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [HeaderComponent, NaavComponent, FooterComponent],
  exports: [HeaderComponent, NaavComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
