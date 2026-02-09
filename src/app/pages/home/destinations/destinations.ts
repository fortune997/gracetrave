import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-destinations',
  standalone: true,

  imports: [CommonModule,RouterModule], // ✅ OBLIGATOIRE POUR ngFor
  templateUrl: './destinations.html',
})
export class Destinations {

  destinations = [
    { name: 'Canada', image: '/images/canada.jpeg' },
    { name: 'France', image: '/images/france.jpeg' },
    { name: 'USA', image: '/images/usa.jpeg' },
    { name: 'Dubaï', image: '/images/dubai.jpeg' }
  ];

}
