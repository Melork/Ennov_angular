import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconeDeleteComponent } from './components/icone-delete/icone-delete.component';
import { IconeNavComponent } from './components/icone-nav/icone-nav.component';




@NgModule({
  declarations: [IconeNavComponent, IconeDeleteComponent],
  exports: [IconeNavComponent, IconeDeleteComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class IconsModule { }
