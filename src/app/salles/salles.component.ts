import {Component, Input, OnInit} from '@angular/core';
import {faDesktop} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {Salle} from '../salle';
import {Uc} from '../uc';
import {Poste} from '../poste';


@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.css']
})
export class SallesComponent implements OnInit {
  faDesktop = faDesktop;
  faUser = faUser;
  @Input()
  salle: Salle;

  constructor() {
  }

  ngOnInit(): void {
  }


  getColor(uc: Uc): string {
    if (typeof (uc) !== 'undefined' && uc !== null) {
      let str = '';
      if (uc.utilisateur) {
        str = 'text-green-400';
      }
      if (uc.utilisateur == null){
        str = '';
      }
      if (!uc.enfonctionnement) {
        str = 'text-red-400';
      }
      return str;
    }
    return 'text-white';
  }

  getUserColor(poste: Poste): string {
    if (typeof (poste) !== 'undefined' && poste !== null) {
      if (poste.username) {
        return 'text-green-400';
      }
    }
    return '';
  }
}
