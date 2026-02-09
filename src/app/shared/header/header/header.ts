import { Component } from '@angular/core';
import { TopBar } from "../top-bar/top-bar";
import { MainNav } from "../main-nav/main-nav";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [TopBar, MainNav, RouterOutlet],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
