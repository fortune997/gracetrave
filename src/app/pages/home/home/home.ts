import { Component } from '@angular/core';
import { TestimonialsComponent } from "../testimonials/testimonials";
import { Destinations } from "../destinations/destinations";
import { HeroComponent } from "../hero/hero";
import { HomeServices } from "../services/services";
import { HomeProcess } from "../process/process";
import { HomeAbout } from "../about/about";


@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    Destinations,
    HeroComponent,
    HomeServices,
    HomeAbout,
    HomeProcess,
    TestimonialsComponent
],
  template: `
   <app-hero/>
   <app-home-about/>
    <app-home-services/>
    <app-destinations />
      <app-home-process/>
    <app-testimonials />
  `
})
export class HomePage {

}
