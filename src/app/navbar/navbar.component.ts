import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'navbar',
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
    logo: 'bi bi-brightness-low-fill',
    routerLink: 'lights',
    activeStyle: 'lights-active'
  },
  {
    logo: 'bi bi-speaker-fill',
    routerLink: 'music',
    activeStyle: 'audio-active'
  },
  {
    logo: 'bi bi-tv-fill',
    routerLink: 'screens',
    activeStyle: 'displays-active'
  }
 ]

 toggleModal(event:string){
  const dialog = document.querySelector('dialog');
  event == 'open'? dialog?.showModal() : dialog?.close();
}


}
