import React, { FC } from 'react';
import { Control, FieldErrors } from 'react-hook-form';
import Input, { InputType } from '../Input/Input';
import { StyledForm } from './styled';

interface FormType extends React.FormHTMLAttributes<HTMLFormElement> {
  align?: string;
  formData?: {
    control: Control;
    errors: FieldErrors;
    content: InputType[];
  };
}

export const Form: FC<FormType> = ({ onSubmit, children, formData, align }) => {
  return (
    <StyledForm align={align} onSubmit={onSubmit}>
      {formData &&
        formData.content.map(({ name, ...rest }) => (
          <Input
            {...rest}
            key={name}
            control={formData.control}
            error={formData.errors[name]}
            name={name}
          />
        ))}
      {children}
    </StyledForm>
  );
};
