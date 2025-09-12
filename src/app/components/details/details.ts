import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './details.html',
  styleUrls: ['./details.scss'],
})
export class Details implements OnInit {
  data: any = null;

  constructor(private storage: StorageService, private router: Router) {}

  ngOnInit(): void {
    this.data = this.storage.getData();
  }

  deleteData(): void {
    this.storage.clearData();
    this.data = null;
  }

  editData(): void {
    this.router.navigate(['/form']);
  }
}
