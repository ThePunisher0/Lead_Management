import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface CardItem {
  id: number;
  title: string;
  subtitle?: string;
  value?: string;
  progress?: number;
  tags?: string[];
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private items: CardItem[] = [
    {
      id: 1,
      title: 'Monthly Leads',
      subtitle: 'This month',
      value: '1,240',
      progress: 72,
      tags: ['sales'],
    },
    {
      id: 2,
      title: 'Conversion Rate',
      subtitle: 'Last 30 days',
      value: '3.8%',
      progress: 38,
      tags: ['kpi'],
    },
    {
      id: 3,
      title: 'Active Campaigns',
      subtitle: 'Running',
      value: '9',
      progress: 50,
      tags: ['marketing'],
    },
    {
      id: 4,
      title: 'Support Tickets',
      subtitle: 'Open',
      value: '17',
      progress: 60,
      tags: ['support'],
    },
  ];

  constructor() {}

  getCardItems(): Observable<CardItem[]> {
    return of(this.items);
  }

  updateProgress(id: number, progress: number) {
    const it = this.items.find((i) => i.id === id);
    if (it) it.progress = progress;
    return of(it);
  }
}
