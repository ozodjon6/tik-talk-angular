import { Component } from '@angular/core';
import {Sidebar} from '../sidebar/sidebar';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [
    RouterModule,
    Sidebar
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

}
