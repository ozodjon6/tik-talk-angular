import { Component, Input } from '@angular/core';
import {ProfileInterface} from '../../data/interface/profile.interface';
import {ImgUrlPipe} from '../../helpers/pipes/img-url-pipe';

@Component({
  selector: 'app-profile-card',
  imports: [
    ImgUrlPipe
  ],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss'
})
export class ProfileCard {
  @Input() profile?: ProfileInterface;
}
