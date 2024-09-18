import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss'
})
export class MusicComponent {
  items = [
    {
      location: 'Terrance',
      volume: '80%',
      action : 'Music',
      icon: 'bi bi-volume-up-fill',
      muted: false
    },
    {
      location: 'Lounge',
      volume: '0%',
      action : 'Digital Signal',
      icon: 'bi bi-volume-mute-fill',
      muted: true
    },
    {
      location: 'Lounge',
      volume: '0%',
      action : 'Digital Signal',
      icon: 'bi bi-volume-mute-fill',
      muted: true
    },
    {
      location: 'Terrance',
      volume: '40%',
      action : 'Music',
      icon: 'bi bi-volume-up-fill',
      muted: false
    },
    {
      location: 'Terrance',
      volume: '90%',
      action : 'Music',
      icon: 'bi bi-volume-up-fill',
      muted: false
    },
    {
      location: 'Lounge',
      volume: '0%',
      action : 'Digital Signal',
      icon: 'bi bi-volume-mute-fill',
      muted: true
    },
    {
      location: 'Lounge',
      volume: '0%',
      action : 'Digital Signal',
      icon: 'bi bi-volume-mute-fill',
      muted: true
    },
    {
      location: 'Terrance',
      volume: '300%',
      action : 'Music',
      icon: 'bi bi-volume-up-fill',
      muted: false
    },
  ]
}
