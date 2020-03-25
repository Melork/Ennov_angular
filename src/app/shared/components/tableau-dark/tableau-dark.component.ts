import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Prestation } from '../../models/prestation';

@Component({
  selector: 'app-tableau-dark',
  templateUrl: './tableau-dark.component.html',
  styleUrls: ['./tableau-dark.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class TableauDarkComponent implements OnInit {

  @Input() headers : string[];
  @Input() collection : Prestation[];
  constructor() { }

  ngOnInit(): void {
  }

}
