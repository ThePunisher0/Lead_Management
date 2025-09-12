import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private storageKey = 'leadData';

  saveData(data: any) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  getData() {
    const raw = localStorage.getItem(this.storageKey);
    return raw ? JSON.parse(raw) : null;
  }

  clearData() {
    localStorage.removeItem(this.storageKey);
  }
}
