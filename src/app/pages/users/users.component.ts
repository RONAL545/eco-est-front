import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule],
  template: `
    <div class="users-container">
      <mat-card>
        <div class="header-section">
          <h2>Gestión de Usuarios</h2>
          <div class="actions">
            <mat-form-field appearance="outline" class="search-field">
              <mat-label>Buscar por nombre o sede...</mat-label>
              <input matInput>
              <mat-icon matPrefix>search</mat-icon>
            </mat-form-field>
            <button mat-raised-button color="primary">
              <mat-icon>add</mat-icon>
              Registrar Personal
            </button>
            <button mat-raised-button color="accent">
              <mat-icon>person_add</mat-icon>
              Registrar Voluntario
            </button>
          </div>
        </div>

        <table mat-table [dataSource]="users" class="users-table">
          <ng-container matColumnDef="ocupacion">
            <th mat-header-cell *matHeaderCellDef>Ocupación</th>
            <td mat-cell *matCellDef="let user">{{user.ocupacion}}</td>
          </ng-container>

          <ng-container matColumnDef="usuario">
            <th mat-header-cell *matHeaderCellDef>Usuario</th>
            <td mat-cell *matCellDef="let user">{{user.usuario}}</td>
          </ng-container>

          <ng-container matColumnDef="sede">
            <th mat-header-cell *matHeaderCellDef>Sede</th>
            <td mat-cell *matCellDef="let user">{{user.sede}}</td>
          </ng-container>

          <ng-container matColumnDef="fecha">
            <th mat-header-cell *matHeaderCellDef>Última Fecha de Uso</th>
            <td mat-cell *matCellDef="let user">{{user.fecha}}</td>
          </ng-container>

          <ng-container matColumnDef="actions">
            <th mat-header-cell *matHeaderCellDef>Editar/Eliminar</th>
            <td mat-cell *matCellDef="let user">
              <button mat-icon-button color="primary">
                <mat-icon>edit</mat-icon>
              </button>
              <button mat-icon-button color="warn">
                <mat-icon>delete</mat-icon>
              </button>
            </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
        </table>
      </mat-card>
    </div>
  `,
  styles: [`
    .users-container { padding: 0; }
    mat-card { padding: 24px; }
    .header-section { margin-bottom: 24px; }
    .header-section h2 { margin: 0 0 16px 0; color: #0f172a; }
    .actions { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
    .search-field { flex: 1; min-width: 250px; }
    .users-table { width: 100%; }
    .users-table th { background-color: #f1f5f9; font-weight: 600; color: #1e3a8a; }
  `]
})
export class UsersComponent {
  displayedColumns = ['ocupacion', 'usuario', 'sede', 'fecha', 'actions'];
  users = [
    {ocupacion: 'PERSONAL', usuario: 'personal1', sede: 'Ayabacas', fecha: '15/02/2026'},
    {ocupacion: 'PERSONAL', usuario: 'personal2', sede: 'La Capilla', fecha: '12/08/2025'},
    {ocupacion: 'VOLUNTARIO', usuario: 'voluntario1', sede: 'Ayabacas', fecha: '11/05/2025'}
  ];
}
