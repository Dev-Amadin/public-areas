import { Injectable } from '@angular/core';
import { Display } from './display';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  displays: Display[] = [
    {
      title: 'Display 1',
      subText: 'Sky',
      icon: 'bi bi-tv-fill',
      isActive: true
    },
    {
      title: 'Display 2',
      subText: 'Sky',
      icon: 'bi bi-tv-fill',
      isActive: false
    },
    {
      title: 'Display 3',
      subText: 'Sky',
      icon: 'bi bi-tv-fill',
      isActive: false
    },
    {
      title: 'Display 4',
      subText: 'Sky',
      icon: 'bi bi-tv-fill',
      isActive: false
    },
    {
      title: 'Display 5',
      subText: 'Sky',
      icon: 'bi bi-tv-fill',
      isActive: true
    },
    {
      title: 'Projector 1',
      subText: 'Sky',
      icon: 'bi bi-gear-fill',
      isActive: false
    },


  ]
}
