import { ClientsI } from '../interfaces/clients-i';
import { StateClient } from '../enums/state-client.enum';

export class Client implements ClientsI {
  id: number;
  name: string;
  email: string;
  state: StateClient;

  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
