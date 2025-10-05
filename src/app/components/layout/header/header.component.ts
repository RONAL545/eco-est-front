import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatDividerModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  get currentUser() {
    return this.authService.currentUserValue;
  }

  getPageTitle(): string {
    const url = this.router.url;
    if (url.includes('dashboard')) return 'DATOS DE RECICLAJE';
    if (url.includes('users')) return 'Gestión de Usuarios';
    if (url.includes('segregacion')) return 'Segregación';
    return 'DATOS DE RECICLAJE';
  }
}
