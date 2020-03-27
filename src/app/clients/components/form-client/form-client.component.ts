import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { } from 'protractor';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  @Output() private nItem: EventEmitter<Client> = new EventEmitter;
  public states = Object.values(StateClient); //tableau de string de State
  public form: FormGroup;
  private item = new Client();
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.item.name, Validators.required],
      email: [this.item.email, Validators.email],
      state: [this.item.state],
    })
  }

  public onSubmit() {
    this.nItem.emit(this.form.value)
  }

}
