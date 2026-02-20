import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-billetterie',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './billetterie.html',
})
export class Billetterie {
  services = [
    {
      title: 'Billets nationaux',
      description: 'Voyagez à l’intérieur du pays avec des tarifs compétitifs.',
      image: 'assets/images/billet-national.jpg',
    },
    {
      title: 'Billets internationaux',
      description: 'Réservez vos vols vers l’Europe, l’Amérique et l’Asie.',
      image: 'assets/images/billet-international.jpg',
    },
    {
      title: 'Billets de groupe',
      description: 'Solutions adaptées pour familles, entreprises et groupes.',
      image: 'assets/images/billet-groupe.jpg',
    },
  ];

  steps = [
    'Remplissez votre demande',
    'Recevez une proposition de vol',
    'Confirmez et payez',
    'Recevez votre billet',
  ];
}
