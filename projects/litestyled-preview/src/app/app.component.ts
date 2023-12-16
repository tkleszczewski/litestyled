import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LitestyledButtonComponent } from '../../../litestyled/src/public-api';
import { LitestyledSpinnerComponent } from '../../../litestyled/src/lib/spinner/spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LitestyledButtonComponent,
    LitestyledSpinnerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
