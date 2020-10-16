import {Ilot} from './ilot';

export interface Salle {
  id: number;
  nom: string;
  type: string;
  ilots: Ilot[];
}
