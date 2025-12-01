import styled, { css, keyframes } from 'styled-components';
import { ButtonProps } from './Button.types';
import { theme } from '../../theme';

const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(168, 85, 247, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(168, 85, 247, 0);
  }
`;

const rippleAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
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

const getVariantStyles = (variant: ButtonProps['variant'], gradient?: ButtonProps['gradient']) => {
  switch (variant) {
    case 'primary':
      return css`
        background: ${theme.colors.primary[600]};
        color: white;
        border: 1px solid ${theme.colors.primary[600]};
        
        &:hover:not(:disabled) {
          background: ${theme.colors.primary[700]};
          border-color: ${theme.colors.primary[700]};
          transform: translateY(-2px);
          box-shadow: ${theme.shadows.purple};
        }
      `;

    case 'secondary':
      return css`
        background: ${theme.colors.secondary[100]};
        color: ${theme.colors.secondary[700]};
        border: 1px solid ${theme.colors.secondary[200]};
        
        &:hover:not(:disabled) {
          background: ${theme.colors.secondary[200]};
          border-color: ${theme.colors.secondary[300]};
          transform: translateY(-2px);
        }
      `;

    case 'outline':
      return css`
        background: transparent;
        color: ${theme.colors.primary[600]};
        border: 2px solid ${theme.colors.primary[600]};
        
        &:hover:not(:disabled) {
          background: ${theme.colors.primary[600]};
          color: white;
          transform: translateY(-2px);
          box-shadow: ${theme.shadows.purple};
        }
      `;

    case 'ghost':
      return css`
        background: transparent;
        color: ${theme.colors.primary[600]};
        border: 1px solid transparent;
        
        &:hover:not(:disabled) {
          background: ${theme.colors.primary[50]};
          color: ${theme.colors.primary[700]};
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
        background: ${gradientMap[gradient || 'purple']};
        color: white;
        border: none;
        position: relative;
        overflow: hidden;
        
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }
        
        &:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: ${theme.shadows.purple};
          
          &::before {
            left: 100%;
          }
        }
        
        &:active:not(:disabled) {
          transform: translateY(0);
        }
      `;

    default:
      return css`
        background: ${theme.colors.primary[600]};
        color: white;
        border: 1px solid ${theme.colors.primary[600]};
      `;
  }
};

const getSizeStyles = (size: ButtonProps['size']) => {
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
    case 'xl':
      return css`
        padding: ${theme.spacing.xl} ${theme.spacing['2xl']};
        font-size: 1.25rem;
        min-height: 3.5rem;
      `;
    default:
      return css`
        padding: ${theme.spacing.md} ${theme.spacing.lg};
        font-size: 1rem;
        min-height: 2.5rem;
      `;
  }
};

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.lg};
  font-weight: 600;
  cursor: pointer;
  transition: all ${theme.animations.duration.normal} ${theme.animations.easing.easeInOut};
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  
  ${({ variant, gradient }) => getVariantStyles(variant, gradient)}
  ${({ size }) => getSizeStyles(size)}
  
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  
  ${({ loading }) => loading && css`
    pointer-events: none;
    
    & > span {
      opacity: 0;
    }
    
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 16px;
      height: 16px;
      border: 2px solid transparent;
      border-top: 2px solid currentColor;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
  `}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none !important;
  }
  
  &:focus-visible {
    outline: 2px solid ${theme.colors.primary[500]};
    outline-offset: 2px;
  }
  
  /* Ripple effect */
  &::before {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ${rippleAnimation} 0.6s linear;
    pointer-events: none;
  }
  
  &:active:not(:disabled) {
    &::before {
      animation: ${rippleAnimation} 0.6s linear;
    }
  }
  
  @keyframes spin {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }
`;

export const ButtonContent = styled.span<{ loading?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  opacity: ${({ loading }) => loading ? 0 : 1};
  transition: opacity ${theme.animations.duration.fast} ${theme.animations.easing.easeInOut};
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;
