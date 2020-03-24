import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icone-nav',
  templateUrl: './icone-nav.component.html',
  styleUrls: ['./icone-nav.component.scss']
})
export class IconeNavComponent implements OnInit {
  public faBars = faBars;
  constructor() { }

  ngOnInit(): void {
  }

}
