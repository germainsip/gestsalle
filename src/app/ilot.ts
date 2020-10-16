import {Uc} from './uc';
import {Poste} from './poste';



export interface Ilot {
  numero: number;
  postes: Poste[];
  ucs: Uc[];
}
