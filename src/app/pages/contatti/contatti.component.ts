import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent {
  // Form
  contactForm: FormGroup;
  
  // Stato
  showToast = false;
  toastMessage = '';
  demonAppears = false;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
      allowTracking: [false]
    });
  }

  onSubmit() {
    this.isSubmitting = true;
    
    if (this.contactForm.invalid) {
      this.markAllAsTouched();
      this.isSubmitting = false;
      return;
    }

    // Simula invio
    setTimeout(() => {
      this.saveToLocalStorage();
      this.showNotification();
      if (this.contactForm.value.allowTracking) {
        this.maybeSummonDemon();
      }
      this.contactForm.reset({ allowTracking: false });
      this.isSubmitting = false;
    }, 800);
  }

  private saveToLocalStorage() {
    const contacts = JSON.parse(localStorage.getItem('raidou-contacts') || '[]');
    contacts.push(this.contactForm.value);
    localStorage.setItem('raidou-contacts', JSON.stringify(contacts));
  }

  private showNotification() {
    const messages = [
      "Raidou ha ricevuto il tuo messaggio",
      "Il corvo nero sta consegnando il messaggio",
      "Sigilli demoniaci applicati alla tua richiesta",
      "Lo Studio Kuzunoha sta esaminando il caso"
    ];
    this.toastMessage = messages[Math.floor(Math.random() * messages.length)];
    this.showToast = true;
    
    setTimeout(() => this.showToast = false, 3000);
  }

  private maybeSummonDemon() {
    if (Math.random() < 0.25) {
      setTimeout(() => {
        this.demonAppears = true;
        setTimeout(() => this.demonAppears = false, 4000);
      }, 2000);
    }
  }

  private markAllAsTouched() {
    Object.values(this.contactForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  closeDemon() {
    this.demonAppears = false;
  }
}