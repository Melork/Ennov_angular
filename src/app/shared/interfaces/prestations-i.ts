import { State } from '../enums/state-prestation.enum';

export interface PrestationI {
  id: number;
  typePresta: string;
  client: string;
  tjmHt: number;
  nbJours: number;
  tva: number;
  state: State;
  comment: string;
  totalHt(): number;
  totalTtc(): number;
}
