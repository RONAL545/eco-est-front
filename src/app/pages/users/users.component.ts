import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LucideAngularModule, Search, UserPlus, Users, Edit, Trash2 } from 'lucide-angular';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    LucideAngularModule
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  // Lucide Icons
  readonly Search = Search;
  readonly UserPlus = UserPlus;
  readonly Users = Users;
  readonly UsersIcon = Users;
  readonly Edit = Edit;
  readonly Trash2 = Trash2;

  displayedColumns = ['ocupacion', 'usuario', 'sede', 'fecha', 'actions'];

  users = [
    {ocupacion: 'PERSONAL', usuario: 'personal1', sede: 'Ayabacas', fecha: '15/02/2026'},
    {ocupacion: 'PERSONAL', usuario: 'personal2', sede: 'La Capilla', fecha: '12/08/2025'},
    {ocupacion: 'VOLUNTARIO', usuario: 'voluntario1', sede: 'Ayabacas', fecha: '11/05/2025'}
  ];
}
