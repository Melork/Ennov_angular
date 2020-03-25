import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Prestation } from '../../models/prestation';

@Component({
  selector: 'app-tableau-light',
  templateUrl: './tableau-light.component.html',
  styleUrls: ['./tableau-light.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class TableauLightComponent implements OnInit {

  @Input() headers : string[];
  @Input() collection : Prestation[];

  constructor() { }

  ngOnInit(): void {
  }

}
