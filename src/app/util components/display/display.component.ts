import { Component, input } from '@angular/core';
import { Display } from './display';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'display-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss'
})
export class DisplayComponent {

  displays = input.required<Display[]>();

}
