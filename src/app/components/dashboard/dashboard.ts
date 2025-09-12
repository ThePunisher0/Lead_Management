import { Component, OnInit } from '@angular/core';
import { CardItem, DataService } from '../../services/data.servive';
import { Card } from '../card/card';
import { Form } from '../form/form';
import { Header } from "../header/header";
import { SideBar } from "../side-bar/side-bar";

@Component({
  selector: 'app-dashboard',
  imports: [Card, Header, SideBar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  items: CardItem[] = [];
  constructor(private data: DataService) {}
    sidebarOpen = false;


  ngOnInit() {
    this.data.getCardItems().subscribe((x) => (this.items = x));
  }

  bump(item: CardItem) {
    const next = Math.min(100, (item.progress ?? 0) + 5);
    this.data.updateProgress(item.id, next).subscribe();
  }
    toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
    closeSidebar() {
    this.sidebarOpen = false;
  }
}
