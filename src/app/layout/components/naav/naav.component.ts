import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
  selector: 'app-naav',
  templateUrl: './naav.component.html',
  styleUrls: ['./naav.component.scss']
})
export class NaavComponent implements OnInit {

  constructor(private u: UtilService) { }

  ngOnInit(): void {
  }

  public increment() {
    this.u.incrementVersion();
  }

}
