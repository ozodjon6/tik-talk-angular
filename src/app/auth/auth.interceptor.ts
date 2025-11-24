import {inject} from '@angular/core';
import {Auth} from './auth';
import {HttpInterceptorFn} from '@angular/common/http';

export const authTokenInterceptor: HttpInterceptorFn = (req: any , next: any) => {

  const token = inject(Auth).accessToken

  if(!token) return next(req)

  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  })

  return next(req)
}
