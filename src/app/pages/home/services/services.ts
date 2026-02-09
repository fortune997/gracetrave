import { Colis } from './../../colis/colis';
import { Formations } from './../../formations/formations';
import { Assurance } from './../../assurance/assurance';
import { Billetterie } from './../../billetterie/billetterie';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.html',
})
export class HomeServices {
  viim="/images/visa.png"
  billetterie='/images/billet.png'
  assurance='/images/assurance.png'
  Formation='/images/formation.png'
  Colis='/images/colis.png'
}
