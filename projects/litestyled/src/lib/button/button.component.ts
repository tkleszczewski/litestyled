import { Component, Input } from '@angular/core';
import { LitestyledButtonSize, LitestyledButtonVariant } from './button.types';
import { NgClass } from '@angular/common';

@Component({
  selector: 'litestyled-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class LitestyledButtonComponent {
  @Input()
  variant: LitestyledButtonVariant = LitestyledButtonVariant.DEFAULT;

  @Input()
  size: LitestyledButtonSize = LitestyledButtonSize.DEFAULT;

  getClasses() {
    return {
      // VARIANTS
      'ls-button--variant-default':
        this.variant === LitestyledButtonVariant.DEFAULT,
      'ls-button--variant-primary':
        this.variant === LitestyledButtonVariant.PRIMARY,
      'ls-button--variant-secondary':
        this.variant === LitestyledButtonVariant.SECONDARY,
      'ls-button--variant-success':
        this.variant === LitestyledButtonVariant.SUCCESS,
      'ls-button--variant-warning':
        this.variant === LitestyledButtonVariant.WARNING,
      'ls-button--variant-danger':
        this.variant === LitestyledButtonVariant.DANGER,
      // SIZES
      'ls-button--size-default': this.size === LitestyledButtonSize.DEFAULT,
      'ls-button--size-small': this.size === LitestyledButtonSize.SMALL,
      'ls-button--size-large': this.size === LitestyledButtonSize.LARGE,
    };
  }
}
