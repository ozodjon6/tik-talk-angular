import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  http = inject(HttpClient);
  baseUrl = 'https://icherniakov.ru/yt-course/'

  login(payload: {username: string, password: string}) {
    const formData = new FormData();

    formData.append('username', payload.username);
    formData.append('password', payload.password);
    return this.http.post(
      `${this.baseUrl}auth/token`,
      formData,
    );
  }
}
