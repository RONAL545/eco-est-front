import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    SidebarComponent,
    HeaderComponent
  ],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav
        #drawer
        class="sidenav"
        [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
        [mode]="(isHandset$ | async) ? 'over' : 'side'"
        [opened]="!(isHandset$ | async)">
        <app-sidebar (menuItemClick)="drawer.close()"></app-sidebar>
      </mat-sidenav>

      <mat-sidenav-content>
        <app-header
          [isMobile]="(isHandset$ | async) || false"
          (menuToggle)="drawer.toggle()">
        </app-header>
        <div class="content-area">
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    .sidenav-container {
      height: 100vh;
    }

    .sidenav {
      width: var(--sidebar-width);
    }

    .content-area {
      padding: 24px;
      min-height: calc(100vh - 64px);
      background: #f8fafc;
    }

    @media (max-width: 768px) {
      .content-area {
        padding: 16px;
      }
    }

    @media (max-width: 600px) {
      .content-area {
        padding: 12px;
      }
    }
  `]
})
export class MainLayoutComponent {
  @ViewChild('drawer') drawer!: MatSidenav;
  isHandset$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset$ = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet])
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }
}
