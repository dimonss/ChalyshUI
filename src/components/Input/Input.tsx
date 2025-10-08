import React, { forwardRef } from 'react';
import { InputProps } from './Input.types';
import {
  InputContainer,
  Label,
  InputWrapper,
  StyledInput,
  IconWrapper,
  HelperText,
  ErrorIcon,
  SuccessIcon,
} from './Input.styles';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'default',
      size = 'md',
      label,
      placeholder,
      error,
      success = false,
      disabled = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      helperText,
      gradient = 'purple',
      ...props
    },
    ref
  ) => {
    const hasError = !!error;
    const hasSuccess = success && !hasError;
    const hasLeftIcon = !!leftIcon;
    const hasRightIcon = !!rightIcon || hasError || hasSuccess;

    const renderRightIcon = () => {
      if (hasError) {
        return (
          <ErrorIcon>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </ErrorIcon>
        );
      }
      
      if (hasSuccess) {
        return (
          <SuccessIcon>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </SuccessIcon>
        );
      }
      
      return rightIcon ? <IconWrapper position="right">{rightIcon}</IconWrapper> : null;
    };

    return (
      <InputContainer fullWidth={fullWidth}>
        {label && (
          <Label error={error} success={hasSuccess}>
            {label}
          </Label>
        )}
        
        <InputWrapper
          variant={variant}
          size={size}
          error={error}
          success={hasSuccess}
          disabled={disabled}
          fullWidth={fullWidth}
          gradient={gradient}
        >
          {leftIcon && <IconWrapper position="left">{leftIcon}</IconWrapper>}
          
          <StyledInput
            ref={ref}
            placeholder={placeholder}
            disabled={disabled}
            hasLeftIcon={hasLeftIcon}
            hasRightIcon={hasRightIcon}
            error={error}
            success={hasSuccess}
            {...props}
          />
          
          {renderRightIcon()}
        </InputWrapper>
        
        {(helperText || error) && (
          <HelperText error={error} success={hasSuccess}>
            {error || helperText}
          </HelperText>
        )}
      </InputContainer>
    );
  }
);

Input.displayName = 'Input';
