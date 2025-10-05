import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    BaseChartDirective
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['pabellon', 'plastico', 'carton', 'vidrio', 'organico', 'metal', 'no_aprovechable'];

  dataSource = [
    {pabellon: 'Pabellón General', plastico: 608, carton: 500, vidrio: 200, organico: 350, metal: 450, no_aprovechable: 750},
    {pabellon: 'Laboratorios Generales', plastico: 505, carton: 700, vidrio: 400, organico: 352, metal: 360, no_aprovechable: 805},
    {pabellon: 'Auditorio', plastico: 608, carton: 500, vidrio: 200, organico: 350, metal: 450, no_aprovechable: 750},
  ];

  public pieChartData: ChartConfiguration<'pie'>['data'] = {
    labels: ['Plástico', 'Cartón o Papel', 'Vidrio', 'R. Orgánico', 'Metal', 'R. No Aprovechables'],
    datasets: [{
      data: [20.6, 28.6, 9.3, 14.4, 12.7, 14.4],
      backgroundColor: ['#3B82F6', '#FBBF24', '#10B981', '#8B5CF6', '#64748B', '#EF4444']
    }]
  };

  public pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    plugins: {
      legend: { position: 'right' }
    }
  };

  ngOnInit() {}

  exportData() {
    console.log('Exportando datos...');
  }
}
