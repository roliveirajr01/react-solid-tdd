import React, { useContext } from 'react'
import styles from './form-status.module.scss'
import Spinner from '../spinner/spinner';
import Context from '@/presentation/contexts/forms/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const FormStatus: React.FC<Props> = () => {
  const { state, errorState } = useContext(Context)
  return (
    <div data-testid="error-wrap" className={styles.errorWrap}>
      {state.isLoading && <Spinner className={styles.spinner} />}

      {errorState.main && <span className={styles.error}>{errorState.main}</span>}

    </div>
  )
}

export default FormStatus