import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Audio } from './audio';

@Component({
  selector: 'audio-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audio.component.html',
  styleUrl: './audio.component.scss'
})
export class AudioComponent {
  items = input.required<Audio[]>();

  

}
