import {Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfileCard} from './components/profile-card/profile-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tik-talk');
}
