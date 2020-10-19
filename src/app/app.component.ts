import {Component} from '@angular/core';
import {LIGNE1, LIGNE2} from './ligne';
import {Salle} from './salle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestsalle';
  ligne1 = LIGNE1;
  ligne2 = LIGNE2;
  selectSalle: Salle;
  compte1 = 0;
  compteUser = 0;

  onSelect(salle: Salle): void {
    this.selectSalle = salle;
  }
 compteLigne(ligne: Salle[]): void {
   for (const salle of ligne) {
     if (salle.ilots) {
       this.compte1 += salle.ilots.length * 4;
       for (const poste of salle.ilots) {
         for (let i = 0; i < 4; i++) {
           if ( typeof (poste.postes[i]) !== 'undefined' && poste.postes[i] !== null) {
             if (poste.postes[i].username !== null) {
               this.compteUser += 1;
             }
           }
         }
       }
     }
   }
 }
  pourcent(): number {
    this.compteLigne(this.ligne1);
    this.compteLigne(this.ligne2);
    return this.compteUser / this.compte1 * 100;
  }
}
