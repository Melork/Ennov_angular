import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icone-delete',
  templateUrl: './icone-delete.component.html',
  styleUrls: ['./icone-delete.component.scss']
})
export class IconeDeleteComponent implements OnInit {
  public faTrash = faTrash;
  constructor() { }

  ngOnInit(): void {
  }

}
