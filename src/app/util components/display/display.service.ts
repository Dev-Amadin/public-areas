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
      icon: 'bi bi-tv'
    },
    {
      title: 'Display 2',
      subText: 'Sky',
      icon: 'bi bi-tv'
    },
    {
      title: 'Display 3',
      subText: 'Sky',
      icon: 'bi bi-tv'
    },
    {
      title: 'Display 4',
      subText: 'Sky',
      icon: 'bi bi-tv'
    },
    {
      title: 'Display 5',
      subText: 'Sky',
      icon: 'bi bi-tv'
    },
    {
      title: 'Projector 1',
      subText: 'Sky',
      icon: 'bi bi-gear-fill'
    },


  ]
}
