import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
})
export class Contact {

  form = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  submit() {
    console.log('Message envoyé :', this.form);
    alert('Votre message a bien été envoyé. Nous vous contacterons rapidement.');
  }
}
