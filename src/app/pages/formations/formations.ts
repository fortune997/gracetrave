import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './formations.html',
})
export class Formations {

  formations = [
    {
      title: 'Formation Voyage & Immigration',
      description:
        'Apprenez les bases essentielles pour voyager, préparer un dossier de visa et éviter les erreurs courantes.',
      image: 'assets/images/formation-visa.jpg',
      duration: '4 semaines',
    },
    {
      title: 'Formation Métiers du Voyage',
      description:
        'Découvrez les métiers liés au tourisme, à la billetterie et à l’assistance voyage.',
      image: 'assets/images/formation-tourisme.jpg',
      duration: '6 semaines',
    },
    {
      title: 'Formation Entrepreneuriat International',
      description:
        'Lancez votre activité à l’international avec les bonnes stratégies et les bons outils.',
      image: 'assets/images/formation-business.jpg',
      duration: '8 semaines',
    },
  ];

  benefits = [
    'Formateurs expérimentés',
    'Supports de cours fournis',
    'Accompagnement personnalisé',
    'Certificat de participation',
  ];
}
