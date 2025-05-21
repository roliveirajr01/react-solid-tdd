import React, { useState, useEffect } from 'react';
import styles from './login.module.scss';
import { Footer, LoginHeader, Input, FormStatus } from '@/presentation/components';
import Context from '@/presentation/contexts/forms/form-context'
import { Validation } from '@/presentation/protocols/validation';

type Props = {
  validation?: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    password: '',
    mainError: '',
  })

  useEffect(() => {
    validation?.validate({ email: state.email })
  }, [state.email])

  useEffect(() => {
    validation?.validate({ password: state.password })
  }, [state.password])

  return (
    <div className={styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }} >
        <form action="" className={styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <button type="submit" data-testid="submit" disabled className={styles.submit}>Entrar</button>
          <span className={styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  );
};

export default Login;
