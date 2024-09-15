import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss'
})
export class DisplayComponent {

  items = [
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
