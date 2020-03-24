import { Component } from '@angular/core';
import { UtilService } from './core/services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
public utils = this.util;
constructor(private util : UtilService){

}

public toggle(){
  this.utils.toggle();
}

  title = 'Hey crm-ennov';
}
