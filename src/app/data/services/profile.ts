import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProfileInterface} from '../interface/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class Profile {

  http = inject(HttpClient)
  baseUrl = 'https://icherniakov.ru/yt-course/'

  getTestAccounts() {
    return this.http.get<ProfileInterface[]>(`${this.baseUrl}account/test_accounts`)
  }
}
