import { Component, Input } from '@angular/core';
import {
  LitestyledButtonSize,
  LitestyledButtonSizes,
  LitestyledButtonVariant,
  LitestyledButtonVariants,
  LitestyledButtonColor,
  LitestyledButtonColors,
} from './button.types';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'litestyled-button',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class LitestyledButtonComponent {
  @Input('style')
  buttonStyles: { [klass: string]: any } = {};

  @Input('disabled')
  isButtonDisabled: boolean = false;

  @Input()
  color: LitestyledButtonColor = LitestyledButtonColors.DEFAULT;

  @Input()
  variant: LitestyledButtonVariant = LitestyledButtonVariants.DEFAULT;

  @Input()
  size: LitestyledButtonSize = LitestyledButtonSizes.DEFAULT;

  @Input()
  rippleDuration: number = 300;

  rippleActive: boolean = false;

  constructor() {}

  getClasses() {
    return {
      // COLORS
      'ls-button--color-default': this.color === LitestyledButtonColors.DEFAULT,
      'ls-button--color-primary': this.color === LitestyledButtonColors.PRIMARY,
      'ls-button--color-secondary':
        this.color === LitestyledButtonColors.SECONDARY,
      'ls-button--color-success': this.color === LitestyledButtonColors.SUCCESS,
      'ls-button--color-warning': this.color === LitestyledButtonColors.WARNING,
      'ls-button--color-danger': this.color === LitestyledButtonColors.DANGER,
      // SIZES
      'ls-button--size-default': this.size === LitestyledButtonSizes.DEFAULT,
      'ls-button--size-small': this.size === LitestyledButtonSizes.SMALL,
      'ls-button--size-large': this.size === LitestyledButtonSizes.LARGE,
      // VARIANTS
      'ls-button--variant-default':
        this.variant === LitestyledButtonVariants.DEFAULT,
      'ls-button--variant-outlined':
        this.variant === LitestyledButtonVariants.OUTLINED,
      'ls-button--disabled': this.isButtonDisabled,
    };
  }

  handleClick() {
    this.rippleActive = true;
    setTimeout(() => {
      this.rippleActive = false;
    }, this.rippleDuration);
  }
}
