import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-light-scenes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './light-scenes.component.html',
  styleUrl: './light-scenes.component.scss'
})
export class LightScenesComponent {
  items = [
    {
      scene: 'Scene 1',
      event: 'Breakfast',
      icon: '../../../assets/img/Wb incandescent.svg',
      active : true
    },
    {
      scene: 'Scene 2',
      event: 'Lunch',
      icon: '../../../assets/img/Wb incandescent2.svg',
      active : false
    },
    {
      scene: 'Scene 3',
      event: 'Dinner',
      icon: '../../../assets/img/Wb incandescent2.svg',
      active : false
    },
    {
      scene: 'Scene 1',
      event: 'Lights OFF',
      icon: '../../../assets/img/Wb incandescent2.svg',
      active : false
    },

  ]

}
