import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatListModule, MatIconModule, MatButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() menuItemClick = new EventEmitter<void>();

  menuItems = [
    { path: '/dashboard', icon: 'dashboard', label: 'Datos' },
    { path: '/segregacion', icon: 'pie_chart', label: 'Segregación' },
    { path: '/users', icon: 'people', label: 'Usuarios' }
  ];

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  onMenuItemClick(): void {
    this.menuItemClick.emit();
  }

  logout(): void {
    this.authService.logout();
  }
}
