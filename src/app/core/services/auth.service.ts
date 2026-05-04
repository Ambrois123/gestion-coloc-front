import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../models/auth-response.model';    


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost/GestionColocBack/public/api';

  constructor(private http: HttpClient) {}

  register(user: any) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(credentials: any) {
  return this.http.post<AuthResponse>(
    `${this.apiUrl}/login`,
    credentials
    );
  }
}