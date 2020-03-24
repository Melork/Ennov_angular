import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconeNavComponent } from './components/icone-nav/icone-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [IconeNavComponent],
  exports: [IconeNavComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class IconsModule { }
