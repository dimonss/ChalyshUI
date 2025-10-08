import React, { forwardRef } from 'react';
import { ButtonProps } from './Button.types';
import { StyledButton, ButtonContent, IconWrapper } from './Button.styles';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      loading = false,
      disabled = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      gradient = 'purple',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <StyledButton
        ref={ref}
        variant={variant}
        size={size}
        loading={loading}
        disabled={isDisabled}
        fullWidth={fullWidth}
        gradient={gradient}
        {...props}
      >
        <ButtonContent loading={loading}>
          {leftIcon && <IconWrapper>{leftIcon}</IconWrapper>}
          {children}
          {rightIcon && <IconWrapper>{rightIcon}</IconWrapper>}
        </ButtonContent>
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';
