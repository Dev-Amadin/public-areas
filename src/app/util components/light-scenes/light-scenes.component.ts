import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { LightScene } from './light-scene';

@Component({
  selector: 'app-light-scenes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './light-scenes.component.html',
  styleUrl: './light-scenes.component.scss'
})
export class LightScenesComponent {
  lightScenes = input.required<LightScene[]>()
}
