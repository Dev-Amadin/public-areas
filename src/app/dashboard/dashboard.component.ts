import { Component, inject } from '@angular/core';
import { DisplayComponent } from '../util components/display/display.component';
import { BackgroundMusicComponent } from '../util components/background-music/background-music.component';
import { LightScenesComponent } from '../util components/light-scenes/light-scenes.component';
import { AudioComponent } from '../util components/audio/audio.component';
import { AudioService } from '../util components/audio/audio.service';
import { DisplayService } from '../util components/display/display.service';
import { LightSceneService } from '../util components/light-scenes/light-scene.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DisplayComponent, BackgroundMusicComponent, LightScenesComponent, AudioComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  isLight = true;

  audioService = inject(AudioService);
  displayService = inject(DisplayService);
  lightSceneService = inject(LightSceneService)
}
