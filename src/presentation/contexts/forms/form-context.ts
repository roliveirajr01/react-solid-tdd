import React from 'react';

export type FormContextProps = {
  isLoading: boolean;
  errorMessage: string
};

const defaultState: FormContextProps = {
  isLoading: false,
  errorMessage: ''
};

const FormContext = React.createContext<FormContextProps>(defaultState);

export default FormContext;
