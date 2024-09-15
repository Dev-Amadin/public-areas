import { Component } from '@angular/core';
import { DisplayComponent } from '../util components/display/display.component';
import { BackgroundMusicComponent } from '../util components/background-music/background-music.component';
import { LightScenesComponent } from '../util components/light-scenes/light-scenes.component';
import { AudioComponent } from '../util components/audio/audio.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DisplayComponent, BackgroundMusicComponent, LightScenesComponent, AudioComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  isLight = true;

  // this method is to toggle, showing when just 3 items are active
  // it works only when the Light Scene card and the empty space with the KCP logo is shown are clicked
  toggleItems(){
    this.isLight = !this.isLight;
  }

}
