import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private apiService: ApiService) {}

  getAllUsers(): Observable<User[]> {
    return this.apiService.get<User[]>('/usuarios');
  }

  getUserById(id: number): Observable<User> {
    return this.apiService.get<User>(`/usuarios/${id}`);
  }

  createUser(user: Partial<User>): Observable<User> {
    return this.apiService.post<User>('/usuarios', user);
  }

  updateUser(id: number, user: Partial<User>): Observable<User> {
    return this.apiService.put<User>(`/usuarios/${id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.apiService.delete<void>(`/usuarios/${id}`);
  }
}
