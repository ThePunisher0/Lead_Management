import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  imports: [],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss',
})
export class SideBar {
  menu = [
    { label: 'Overview', icon: '🏠' },
    { label: 'Leads', icon: '📋' },
    { label: 'Analytics', icon: '📊' },
    { label: 'Settings', icon: '⚙️' },
  ];
}
