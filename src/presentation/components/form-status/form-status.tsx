import React, { useContext } from 'react'
import styles from './form-status.module.scss'
import Spinner from '../spinner/spinner';
import Context from '@/presentation/contexts/forms/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const FormStatus: React.FC<Props> = () => {
  const { isLoading, errorMessage } = useContext(Context)
  return (
    <div data-testid="error-wrap" className={styles.errorWrap}>
      {isLoading && <Spinner className={styles.spinner} />}

      {errorMessage && <span className={styles.error}>{errorMessage}</span>}

    </div>
  )
}

export default FormStatus