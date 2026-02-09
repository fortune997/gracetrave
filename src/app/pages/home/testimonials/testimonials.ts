import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.css']
})
export class TestimonialsComponent {

  testimonials = [
    {
      image: '/images/lui.jpeg',
      name: 'Jean M.',
      role: 'Client – Visa',
      message: 'Grâce à votre accompagnement, mon visa a été obtenu rapidement.'
    },
    {
      image: '/images/moi.jpeg',
      name: 'Sarah K.',
      role: 'Billetterie',
      message: 'Service fiable, rapide et très professionnel.'
    },
    {
      image: '/images/toi.jpeg',
      name: 'David N.',
      role: 'Assurance voyage',
      message: 'Je recommande vivement, équipe très sérieuse.'
    }
  ];

}
