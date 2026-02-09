import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-nav.html',
})
export class MainNav {
  image='/images/logo.jpeg'
   recherche='/images/recherche.png'
  mobileOpen = signal(false);
  servicesOpen = signal(false);

  toggleMobile() {
    this.mobileOpen.update(v => !v);
  }

  toggleServices() {
    this.servicesOpen.update(v => !v);
  }
}
