import { Routes } from '@angular/router';
import {SearchPage} from './pages/search-page/search-page';
import {LoginPage} from './pages/login-page/login-page';
import {Layout} from './components/layout/layout';
import {ProfilePage} from './pages/profile-page/profile-page';
import {canActivateAuthGuard} from './auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: SearchPage
      },
      {
        path: 'profile',
        component: ProfilePage
      },
    ],
    canActivate: [canActivateAuthGuard]
  },
  {
    path: 'login',
    component: LoginPage
  }
];
