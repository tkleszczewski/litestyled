import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  LitestyledButtonComponent,
  LitestyledButtonSize,
  LitestyledButtonVariant,
} from '../../../litestyled/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LitestyledButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  buttonSizeSmall = LitestyledButtonSize.SMALL;
  buttonSizeLarge = LitestyledButtonSize.LARGE;
  buttonVariantPrimary = LitestyledButtonVariant.PRIMARY;
  buttonVariantSecondary = LitestyledButtonVariant.SECONDARY;
  buttonVariantSuccess = LitestyledButtonVariant.SUCCESS;
}
