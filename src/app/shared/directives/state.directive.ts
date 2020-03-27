import { Directive, Input, OnChanges, HostBinding } from '@angular/core';
import { State } from '../enums/state-prestation.enum';
import { StateClient } from '../enums/state-client.enum';

@Directive({
  selector: '[appState],[appStateClient]',
})
export class StateDirective implements OnChanges {
  @Input() appState: State;
  @Input() appStateClient: StateClient;
  @HostBinding('class') nomClass:string;
  constructor() {
  }
  ngOnChanges(): void{
    if(this.appState){
      this.nomClass = this.formatClass(this.appState);
    } else {
      this.nomClass = this.formatClass(this.appStateClient);
    }
  }

  private formatClass(state: any) : string {
    return`state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }

}
// passer un state a cette idrective qui le recup depuis component parent
// générer string squi va correcpondre a nom de class pour css
// si appState === Annulé => state-annule
// si appState === Option => state-option
// si appState === Confirmé => state-confirme

// bindé proprité classe du host element avec le string
