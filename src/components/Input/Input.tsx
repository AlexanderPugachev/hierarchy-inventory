import React from 'react';
import { Control, Controller, RegisterOptions, FieldError } from 'react-hook-form';
import { Container, ErrorText, StyledInput } from './styles';

export type InputType = {
  control?: Control
  defaultValue?: string | number
  label: string
  name: string
  error?: FieldError
  rules: RegisterOptions
  type?: string
}

const Input: React.FC<InputType> = ({ control, label, name, rules, type = 'text', error, defaultValue = '' }) => {
  return (
    <Container>
      {label && label}

      <Controller
        as={StyledInput}
        control={control}
        defaultValue={defaultValue ?? type === 'number' ? 0 : ''}
        name={name}
        rules={rules}
        type={type}
      />

      {error && <ErrorText>{error.message}</ErrorText>}
    </Container>
  );
};

export default Input;