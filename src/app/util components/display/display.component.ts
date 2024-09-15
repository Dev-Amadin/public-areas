import { Component, input } from '@angular/core';
import { Display } from './display';

@Component({
  selector: 'display-component',
  standalone: true,
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss'
})
export class DisplayComponent {

  displays = input.required<Display[]>();

}
