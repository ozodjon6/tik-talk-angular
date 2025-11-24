import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs';
import {AuthInterFace} from './auth.interface';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  http = inject(HttpClient);
  cookieService = inject(CookieService);
  baseUrl = 'http://10.1.1.40:9000/api/'

  accessToken: string | null = null;
  refreshToken: string | null = null;

  get isAuth() {
    if (!this.accessToken) {
      this.accessToken = this.cookieService.get('accessToken');
    }
    return !!this.accessToken;
  }

  login(payload: {username: string, password: string}) {
    // const formData = new FormData();

    // formData.append('email', payload.username);
    // formData.append('password', payload.password);
    return this.http.post<AuthInterFace>(
      `${this.baseUrl}auth/login`,
      {
        email: payload.username,
        password: payload.password
      },
      { withCredentials: true }
    ).pipe(
      tap(res => {
        console.log('res', res);
        this.accessToken = res.token.accessToken;
        this.refreshToken = res.token.refreshToken;

        this.cookieService.set('accessToken', res.token.refreshToken);
        this.cookieService.set('refreshToken', res.token.accessToken);
      })
    )
  }
}
