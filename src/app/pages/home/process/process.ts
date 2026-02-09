import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-process',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './process.html',
})
export class HomeProcess {
  steps = [
    {
      step: '01',
      title: 'Analyse du projet',
      desc: 'Étude de votre profil, pays cible et type de visa.',
      icon: '📝'
    },
    {
      step: '02',
      title: 'Constitution du dossier',
      desc: 'Liste des documents + vérification complète.',
      icon: '📂'
    },
    {
      step: '03',
      title: 'Préparation entretien',
      desc: 'Coaching ambassade et simulations réelles.',
      icon: '🎤'
    },
    {
      step: '04',
      title: 'Dépôt & suivi',
      desc: 'Dépôt du dossier et suivi jusqu’à décision.',
      icon: '📍'
    },
    {
      step: '05',
      title: 'Voyage & accompagnement',
      desc: 'Billet, assurance, hébergement et départ.',
      icon: '✈️'
    }
  ];
}
