import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 logos = [
  {
    logo: 'bi bi-house-door-fill',
    routerLink: 'dashboard',
    activeStyle: 'dashboard-active'
  },
  {
    logo: 'bi bi-lightbulb-fill',
    routerLink: 'lights',
    activeStyle: 'lights-active'
  },
  {
    logo: 'bi bi-music-note',
    routerLink: 'music',
    activeStyle: 'audio-active'
  },
  {
    logo: 'bi bi-tv',
    routerLink: 'dashboard',
    activeStyle: 'dashboard'
  },
  {
    logo: 'bbi bi-qr-code',
    routerLink: 'dashboard',
    activeStyle: 'dashboard'
  },
 ]

}
