import { InputHTMLAttributes, ReactNode } from 'react';

export type InputVariant = 'default' | 'filled' | 'outlined' | 'gradient';
export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: InputVariant;
  size?: InputSize;
  label?: string;
  placeholder?: string;
  error?: string;
  success?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  helperText?: string;
  gradient?: 'primary' | 'secondary' | 'purple' | 'violet' | 'dark';
}
