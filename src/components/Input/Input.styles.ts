import styled, { css, keyframes } from 'styled-components';
import { InputProps } from './Input.types';
import { theme } from '../../theme';

const focusAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
`;

const shimmerAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const getVariantStyles = (variant: InputProps['variant'], gradient?: InputProps['gradient']) => {
  switch (variant) {
    case 'filled':
      return css`
        background: ${theme.colors.neutral[100]};
        border: 2px solid transparent;
        border-radius: ${theme.borderRadius.lg};
        
        &:focus {
          background: ${theme.colors.neutral[50]};
          border-color: ${theme.colors.primary[500]};
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
        }
        
        &:hover:not(:focus):not(:disabled) {
          background: ${theme.colors.neutral[200]};
        }
      `;
    
    case 'outlined':
      return css`
        background: transparent;
        border: 2px solid ${theme.colors.neutral[300]};
        border-radius: ${theme.borderRadius.lg};
        
        &:focus {
          border-color: ${theme.colors.primary[500]};
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
        }
        
        &:hover:not(:focus):not(:disabled) {
          border-color: ${theme.colors.neutral[400]};
        }
      `;
    
    case 'gradient':
      const gradientMap = {
        primary: theme.colors.gradient.primary,
        secondary: theme.colors.gradient.secondary,
        purple: theme.colors.gradient.purple,
        violet: theme.colors.gradient.violet,
        dark: theme.colors.gradient.dark,
      };
      
      return css`
        background: linear-gradient(white, white) padding-box,
                    ${gradientMap[gradient || 'purple']} border-box;
        border: 2px solid transparent;
        border-radius: ${theme.borderRadius.lg};
        position: relative;
        
        &:focus {
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.2);
          animation: ${focusAnimation} 0.3s ease-out;
        }
        
        &:hover:not(:focus):not(:disabled) {
          background: linear-gradient(white, white) padding-box,
                      ${gradientMap[gradient || 'purple']} border-box;
          box-shadow: 0 4px 12px rgba(168, 85, 247, 0.15);
        }
      `;
    
    default:
      return css`
        background: white;
        border: 2px solid ${theme.colors.neutral[200]};
        border-radius: ${theme.borderRadius.lg};
        
        &:focus {
          border-color: ${theme.colors.primary[500]};
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
        }
        
        &:hover:not(:focus):not(:disabled) {
          border-color: ${theme.colors.neutral[300]};
        }
      `;
  }
};

const getSizeStyles = (size: InputProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        padding: ${theme.spacing.sm} ${theme.spacing.md};
        font-size: 0.875rem;
        min-height: 2rem;
      `;
    case 'md':
      return css`
        padding: ${theme.spacing.md} ${theme.spacing.lg};
        font-size: 1rem;
        min-height: 2.5rem;
      `;
    case 'lg':
      return css`
        padding: ${theme.spacing.lg} ${theme.spacing.xl};
        font-size: 1.125rem;
        min-height: 3rem;
      `;
    default:
      return css`
        padding: ${theme.spacing.md} ${theme.spacing.lg};
        font-size: 1rem;
        min-height: 2.5rem;
      `;
  }
};

export const InputContainer = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
`;

export const Label = styled.label<{ error?: string; success?: boolean }>`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ error, success }) => {
    if (error) return theme.colors.error;
    if (success) return theme.colors.success;
    return theme.colors.neutral[700];
  }};
  transition: color ${theme.animations.duration.fast} ${theme.animations.easing.easeInOut};
`;

export const InputWrapper = styled.div<{ 
  variant?: InputProps['variant']; 
  size?: InputProps['size'];
  error?: string;
  success?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  gradient?: InputProps['gradient'];
}>`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  
  ${({ variant, gradient }) => getVariantStyles(variant, gradient)}
  ${({ size }) => getSizeStyles(size)}
  
  ${({ error }) => error && css`
    border-color: ${theme.colors.error} !important;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
  `}
  
  ${({ success }) => success && css`
    border-color: ${theme.colors.success} !important;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1) !important;
  `}
  
  ${({ disabled }) => disabled && css`
    opacity: 0.5;
    cursor: not-allowed;
    background: ${theme.colors.neutral[100]} !important;
  `}
`;

export const StyledInput = styled.input<{ 
  hasLeftIcon?: boolean; 
  hasRightIcon?: boolean;
  error?: string;
  success?: boolean;
}>`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: ${theme.colors.neutral[900]};
  font-family: inherit;
  transition: all ${theme.animations.duration.normal} ${theme.animations.easing.easeInOut};
  
  &::placeholder {
    color: ${theme.colors.neutral[400]};
    transition: color ${theme.animations.duration.fast} ${theme.animations.easing.easeInOut};
  }
  
  &:focus::placeholder {
    color: ${theme.colors.neutral[300]};
  }
  
  &:disabled {
    cursor: not-allowed;
    color: ${theme.colors.neutral[500]};
  }
  
  ${({ hasLeftIcon }) => hasLeftIcon && css`
    padding-left: 0;
  `}
  
  ${({ hasRightIcon }) => hasRightIcon && css`
    padding-right: 0;
  `}
`;

export const IconWrapper = styled.div<{ position: 'left' | 'right' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.neutral[500]};
  transition: color ${theme.animations.duration.fast} ${theme.animations.easing.easeInOut};
  flex-shrink: 0;
  
  ${({ position }) => position === 'left' && css`
    margin-right: ${theme.spacing.sm};
  `}
  
  ${({ position }) => position === 'right' && css`
    margin-left: ${theme.spacing.sm};
  `}
`;

export const HelperText = styled.span<{ error?: string; success?: boolean }>`
  font-size: 0.75rem;
  color: ${({ error, success }) => {
    if (error) return theme.colors.error;
    if (success) return theme.colors.success;
    return theme.colors.neutral[500];
  }};
  transition: color ${theme.animations.duration.fast} ${theme.animations.easing.easeInOut};
`;

export const ErrorIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.error};
  margin-left: ${theme.spacing.sm};
`;

export const SuccessIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.success};
  margin-left: ${theme.spacing.sm};
`;
