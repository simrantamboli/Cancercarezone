import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/news', title: 'Latest News',  icon:'library_books', class: '' },
    { path: '/video-list', title: 'Survivor Message',  icon:'play_circle_outline', class: '' },
    { path: '/symptoms', title: 'Symptoms',  icon:'health_and_safety', class: '' },
    { path: '/doctor-profile', title: 'Doctor Profile',  icon:'person', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/chatbot', title: 'Carezone Support',  icon:'forum', class: '' },
    { path: '/aboutus', title: 'About Us',  icon:'face', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
