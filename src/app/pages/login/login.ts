import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { AuthResponse } from '../../core/models/auth-response.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login() {
  this.authService.login({
    user_email: this.email,
    user_password: this.password
  }).subscribe({
    next: (response: AuthResponse) => {
      if (response.token) {
        localStorage.setItem('token', response.token);
        console.log('Connexion réussie');
      }
    },
    error: (error) => {
      console.error('Erreur login', error);
    }
  });
}
}