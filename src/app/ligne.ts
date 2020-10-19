import {Salle} from './salle';
import {Ilot} from './ilot';
import {Uc} from './uc';

function ligneTest(numSalle: number): Ilot[] {
  const ilots: Ilot[] = [];

  for (let i: number = (numSalle * 10); i < (numSalle * 10 + 4); i++) {
    ilots.push(
      {
        numero: i,
        postes: [
          {
            id: 1,
            username: 'Paul Auchon',
            usermail: null
          },
          null,
          {
            id: 2,
            username: 'MAx Danger',
            usermail: null
          },
          {
            id: 4,
            username: 'Chase',
            usermail: null
          }
        ],
        ucs: [
          {
            id: 1,
            patrimoine: 'fdgdfg',
            utilisateur: 'Paul Auchon',
            enfonctionnement: true,
            model: 'tre'
          }, /*{
            id: 2,
            patrimoine: 'fdgdfg',
            utilisateur: null,
            enfonctionnement: false,
            model: 'tre'
          }*/ null,
          {
            id: 3,
            patrimoine: 'fdgdfg',
            utilisateur: null,
            enfonctionnement: true,
            model: 'tre'
          },
          {
            id: 4,
            patrimoine: 'fdgdfg',
            utilisateur: null,
            enfonctionnement: false,
            model: 'tre'
          }
        ]
      }
    );
  }


  return ilots;
}


export const LIGNE1: Salle[] = [
  {
    id: 1,
    nom: 'Salle 1',
    ilots: ligneTest(1),
    type: 'salle'
  },
  {
    id: 2,
    nom: 'Salle de cours 1',
    ilots: [],
    type: 'réunion'
  },
  {
    id: 3,
    nom: 'Salle de cours 2',
    ilots: [],
    type: 'réunion'
  },
  {
    id: 4,
    nom: 'Salle 2',
    ilots: ligneTest(2),
    type: 'cours'
  }
];
export const LIGNE2: Salle[] = [
  {
    id: 5,
    nom: 'Salle formateurs 1',
    ilots: [],
    type: 'bureau'
  },
  {
    id: 6,
    nom: 'Salle 3',
    ilots: ligneTest(3),
    type: 'salle'
  },
  {
    id: 7,
    nom: 'Salle 4',
    ilots: ligneTest(4),
    type: 'salle'

  },
  {
    id: 8,
    nom: 'Salle formateurs 2',
    ilots: null,
    type: 'bureau'
  },
  {
    id: 8,
    nom: 'WC',
    ilots: null,
    type: 'réunion'
  }
];


