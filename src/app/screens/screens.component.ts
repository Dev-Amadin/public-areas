import { Component, inject } from '@angular/core';
import { DisplayService } from '../util components/display/display.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-screens',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './screens.component.html',
  styleUrl: './screens.component.scss'
})
export class ScreensComponent {
  displayService = inject(DisplayService);



}
