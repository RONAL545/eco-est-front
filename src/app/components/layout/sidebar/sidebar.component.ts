import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { LucideAngularModule, BarChart3, PieChart, Users, Leaf } from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatRippleModule,
    LucideAngularModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isMobile = false;

  // Lucide Icons
  readonly BarChart3 = BarChart3;
  readonly PieChart = PieChart;
  readonly Users = Users;
  readonly Leaf = Leaf;

  menuItems = [
    { path: '/dashboard', icon: BarChart3, label: 'Dashboard' },
    { path: '/segregacion', icon: PieChart, label: 'Segregación' },
    { path: '/users', icon: Users, label: 'Usuarios' }
  ];
}
