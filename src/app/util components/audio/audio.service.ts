import { Injectable } from '@angular/core';
import { Audio } from './audio';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  audios: Audio[] = [
    {
      location: 'Restaurant - Windows',
      volume: '60%',
      action: 'Music',
      icon: 'bi bi-volume-up-fill',
      muted: false,
    },
    {
      location: 'Restaurant - Entrance',
      volume: '40%',
      action: 'Digital Signal',
      icon: 'bi bi-volume-mute-fill',
      muted: true,
    },
    {
      location: 'Restaurant - Dining Area',
      volume: '70%',
      action: 'Music',
      icon: 'bi bi-volume-up-fill',
      muted: false,
    },
    {
      location: 'Lifts Lobby',
      volume: '80%',
      action: 'Music',
      icon: 'bi bi-volume-up-fill',
      muted: false,
    },
  ];
}
