import { Component } from '@angular/core';
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

  onSelect(salle: Salle): void {
    this.selectSalle = salle;
  }
}
