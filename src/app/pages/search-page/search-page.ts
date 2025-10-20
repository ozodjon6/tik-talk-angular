import {Component, inject} from '@angular/core';
import {ProfileCard} from '../../components/profile-card/profile-card';
import {Profile} from '../../data/services/profile';
import {ProfileInterface} from '../../data/interface/profile.interface';

@Component({
  selector: 'app-search-page',
  imports: [
    ProfileCard
  ],
  templateUrl: './search-page.html',
  styleUrl: './search-page.scss'
})
export class SearchPage {
  profileServices = inject(Profile)
  profiles: ProfileInterface[] = []
  constructor() {
    this.profileServices.getTestAccounts()
      .subscribe((val: any)  => {
        this.profiles = val
      })
  }
}
