import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lights.component.html',
  styleUrl: './lights.component.scss'
})
export class LightsComponent {
  

  scenes = [
    {
      scene:'Lighting Scene 1',
      state: 'Active',
      isActive: true
    },
    {
      scene:'Lighting Scene 2',
      state: 'Off',
      isActive: false
    },
    {
      scene:'Lighting Scene 3',
      state: 'Off',
      isActive: false
    },
    {
      scene:'Lighting Scene 4',
      state: 'Off',
      isActive: false
    },
    {
      scene:'Lighting Scene 5',
      state: 'Off',
      isActive: false
    },
  ]

  allLights = [
    {
      title: 'Light 1',
      isOn: true,
      range: '50%',
    },
    {
      title: 'Light 1',
      isOn: true,
      range: '20%',
    },
    {
      title: 'Light 1',
      isOn: false,
      range: '',
    },
    {
      title: 'Light 1',
      isOn: true,
      range: '60%',
    },
    {
      title: 'Light 1',
      isOn: false,
      range: '',
    },
    {
      title: 'Light 1',
      isOn: true,
      range: '90%',
    },
    {
      title: 'Light 2',
      isOn: true,
      range: '80%',
    },
    {
      title: 'Light 2',
      isOn: false,
      range: '',
    },
    
  ]

}
