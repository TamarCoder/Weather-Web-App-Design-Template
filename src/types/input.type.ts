 import { UseFormRegister, FieldValues } from 'react-hook-form';

export interface InputProps<TFormValues extends FieldValues = FieldValues> {
  type: 'text' | 'password' | 'email' |'textarea' | 'search';
  name: string;
  placeholder: string;
  error?: string;
  disabled?: boolean;
  label?: string;
  register?: UseFormRegister<TFormValues>;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}