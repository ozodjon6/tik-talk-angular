import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs';
import {AuthInterFace} from './auth.interface';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  http = inject(HttpClient);
  baseUrl = 'https://icherniakov.ru/yt-course/'

  accessToken: string | null = null;
  refreshToken: string | null = null;

  get isAuth() {
    return !!this.accessToken;
  }

  login(payload: {username: string, password: string}) {
    const formData = new FormData();

    formData.append('username', payload.username);
    formData.append('password', payload.password);
    return this.http.post<AuthInterFace>(
      `${this.baseUrl}auth/token`,
      formData,
    ).pipe(
      tap(res => {
        this.accessToken = res.access_token;
        this.refreshToken = res.refresh_token;
      })
    )
  }
}
