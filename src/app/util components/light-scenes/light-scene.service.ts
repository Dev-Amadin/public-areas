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
      icon: '../../../assets/img/Wb incandescent.svg',
      isOn : true
    },
    {
      scene: 'Scene 2',
      event: 'Lunch',
      icon: '../../../assets/img/Wb incandescent2.svg',
      isOn : false
    },
    {
      scene: 'Scene 3',
      event: 'Dinner',
      icon: '../../../assets/img/Wb incandescent2.svg',
      isOn : false
    },
    {
      scene: 'Scene 1',
      event: 'Lights OFF',
      icon: '../../../assets/img/Wb incandescent2.svg',
      isOn : false
    },

  ]
}
