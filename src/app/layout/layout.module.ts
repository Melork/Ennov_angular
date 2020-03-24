import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NaavComponent } from './components/naav/naav.component';



@NgModule({
  declarations: [HeaderComponent, NaavComponent, FooterComponent],
  exports: [HeaderComponent, NaavComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
