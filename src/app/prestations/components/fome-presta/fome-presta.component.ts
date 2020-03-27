import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { State } from 'src/app/shared/enums/state-prestation.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-fome-presta',
  templateUrl: './fome-presta.component.html',
  styleUrls: ['./fome-presta.component.scss']
})
export class FomePrestaComponent implements OnInit {

  @Output() private nItem: EventEmitter<Prestation> = new EventEmitter;
  public states = Object.values(State); //tableau de string de State
  public form: FormGroup;
  @Input() private item = new Prestation();
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      typePresta: [this.item.typePresta, Validators.required],
      client: [this.item.client, Validators.minLength(2)],
      tjmHt: [this.item.tjmHt],
      nbJours: [this.item.nbJours],
      tva: [this.item.tva],
      state: [this.item.state],
      comment: [this.item.comment],
      id: [this.item.id]
    })
  }

  public onSubmit() {
    this.nItem.emit(this.form.value)
  }


}
