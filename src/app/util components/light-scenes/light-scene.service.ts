import { Injectable } from '@angular/core';
import { LightScene } from './light-scene';

@Injectable({
  providedIn: 'root'
})
export class LightSceneService {

  lightScenes: LightScene[] = [
    {
      scene: 'Scene 1',
      event: 'Breakfast',
      brightness: '80%',
      isOn : true
    },
    {
      scene: 'Scene 2',
      event: 'Lunch',
      brightness: '',
      isOn : false
    },
    {
      scene: 'Scene 3',
      event: 'Dinner',
      brightness: '',
      isOn : false
    },
    {
      scene: 'Scene 1',
      event: 'Lights OFF',
      brightness: '',
      isOn : false
    },

  ]
}
