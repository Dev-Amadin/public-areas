import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-audio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audio.component.html',
  styleUrl: './audio.component.scss'
})
export class AudioComponent {
  items = [
    {
      location: 'Restaurant - Windows',
      volume: '60%',
      action : 'Music',
      icon: 'bi bi-volume-up-fill',
      muted: false
    },
    {
      location: 'Restaurant - Entrance',
      volume: '40%',
      action : 'Digital Signal',
      icon: 'bi bi-volume-mute-fill',
      muted: true
    },
    {
      location: 'Restaurant - Dining Area',
      volume: '70%',
      action : 'Music',
      icon: 'bi bi-volume-up-fill',
      muted: false
    },
    {
      location: 'Lifts Lobby',
      volume: '80%',
      action : 'Music',
      icon: 'bi bi-volume-up-fill',
      muted: false
    },
  ]

}
