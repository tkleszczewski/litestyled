import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  SpinnerColor,
  SpinnerColors,
  SpinnerVariant,
  SpinnerVariants,
} from './spinner.types';

@Component({
  selector: 'litestyled-spinner',
  standalone: true,
  imports: [NgClass],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css',
})
export class LitestyledSpinnerComponent {
  @Input()
  variant: SpinnerVariant = SpinnerVariants.DEFAULT;

  @Input()
  color: SpinnerColor = SpinnerColors.DEFAULT;

  getClasses() {
    return {
      // VARIANTS
      'ls-spinner--variant-default': this.variant === SpinnerVariants.DEFAULT,

      'ls-spinner--color-default': this.color === SpinnerColors.DEFAULT,
    };
  }
}
