import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {
  leadForm;

  constructor(private fb: FormBuilder, private storage: StorageService, private router: Router) {
    this.leadForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      message: ['', [Validators.maxLength(200)]],
    });
  }

  onSubmit() {
    if (this.leadForm.valid) {
      this.storage.saveData(this.leadForm.value);
      this.router.navigate(['/details']);
    } else {
      this.leadForm.markAllAsTouched();
    }
  }

  get f() {
    return this.leadForm.controls;
  }
}
