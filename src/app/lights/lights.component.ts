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
    {
      scene:'Lighting Scene 6',
      state: 'Off',
      isActive: false
    },
    {
      scene:'Lighting Scene 7',
      state: 'Off',
      isActive: false
    },
    {
      scene:'Lighting Scene 8',
      state: 'Off',
      isActive: false
    },
  ]

  allLights = [
    {
      title: 'Light 1',
      isOn: false,
      range: '',
      isRemove: false
    },
    {
      title: 'Light 1',
      isOn: false,
      range: '',
      isRemove: false
    },
    {
      title: 'Light 1',
      isOn: false,
      range: '',
      isRemove: false
    },
    {
      title: 'Light 1',
      isOn: true,
      range: '',
      isRemove: false
    },
    {
      title: 'Light 1',
      isOn: false,
      range: '',
      isRemove: false
    },
    {
      title: 'Light 1',
      isOn: true,
      range: '',
      isRemove: false
    },
    {
      title: 'Light 2',
      isOn: true,
      range: '80%',
      isRemove: false
    },
    {
      title: 'Light 2',
      isOn: false,
      range: '0%',
      isRemove: false
    },
    {
      title: 'Light 1',
      isOn: false,
      range: '',
      isRemove: false
    },
    {
      title: 'Light 2',
      isOn: true,
      range: '80%',
      isRemove: false
    },
    {
      title: 'Light 2',
      isOn: true,
      range: '80%',
      isRemove: false
    },
    {
      title: 'Light 1',
      isOn: true,
      range: '',
      isRemove: false
    },
    
    {
      title: 'Light 2',
      isOn: false,
      range: '0%',
      isRemove: false
    },
    {
      title: 'Light 2',
      isOn: false,
      range: '0%',
      isRemove: false
    },
    {
      title: 'Light 1',
      isOn: false,
      range: '',
      isRemove: false
    },
   
   
    {
      title: 'Light 1',
      isOn: true,
      range: '',
      isRemove: false
    },
   
    {
      title: 'Light 1',
      isOn: false,
      range: '',
      isRemove: true
    },
    {
      title: 'Light 1',
      isOn: false,
      range: '',
      isRemove: false
    },
    
  ]

}
