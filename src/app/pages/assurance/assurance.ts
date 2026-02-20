import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-assurance',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './assurance.html',
})
export class Assurance {

  assurances = [
    {
      title: 'Assurance Voyage',
      description:
        'Couverture médicale complète pendant votre séjour à l’étranger en cas de maladie ou d’accident.',
      image: 'assets/images/assurance-voyage.jpg',
    },
    {
      title: 'Assurance Visa',
      description:
        'Assurance conforme aux exigences des ambassades pour la constitution de votre dossier de visa.',
      image: 'assets/images/assurance-visa.jpg',
    },
    {
      title: 'Assurance Étudiant',
      description:
        'Protection adaptée aux étudiants internationaux durant leurs études à l’étranger.',
      image: 'assets/images/assurance-etudiant.jpg',
    },
    {
      title: 'Assurance Court Séjour',
      description:
        'Idéale pour les voyages touristiques, missions professionnelles ou séjours temporaires.',
      image: 'assets/images/assurance-court-sejour.jpg',
    },
  ];

  avantages = [
    'Couverture médicale internationale',
    'Assistance 24h / 24',
    'Prise en charge rapide',
    'Conformité aux exigences consulaires',
    'Partenaires reconnus',
  ];
}
