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
        [opened]="!(isHandset$ | async)"
        [disableClose]="!(isHandset$ | async)">
        <app-sidebar [isMobile]="(isHandset$ | async) || false"></app-sidebar>
      </mat-sidenav>

      <mat-sidenav-content>
        <app-header
          [isMobile]="(isHandset$ | async) || false"
          (menuToggle)="onMenuToggle()">
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
      background: #f8fafc;
    }

    .sidenav {
      width: 260px;
      border: none;
      box-shadow: 2px 0 12px rgba(5, 39, 149, 0.08);
    }

    mat-sidenav-content {
      background: #f8fafc;
    }

    .content-area {
      padding: 0;
      min-height: calc(100vh - 64px);
      background: #f8fafc;
    }

    /* Override Material Sidenav backdrop */
    ::ng-deep .mat-drawer-backdrop.mat-drawer-shown {
      background-color: rgba(5, 39, 149, 0.5);
    }

    @media (max-width: 768px) {
      .sidenav {
        width: 280px;
      }

      .content-area {
        min-height: calc(100vh - 60px);
      }
    }

    @media (max-width: 600px) {
      .sidenav {
        width: 260px;
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

  onMenuToggle(): void {
    this.drawer.toggle();
  }
}
