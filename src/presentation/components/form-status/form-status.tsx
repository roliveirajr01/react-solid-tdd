import React, { useContext } from 'react'
import styles from './form-status.module.scss'
import Spinner from '../spinner/spinner';
import Context from '@/presentation/contexts/forms/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const FormStatus: React.FC<Props> = () => {
  const { state } = useContext(Context)
  const { isLoading, mainError } = state
  return (
    <div data-testid="error-wrap" className={styles.errorWrap}>
      {isLoading && <Spinner className={styles.spinner} />}

      {mainError && <span className={styles.error}>{mainError}</span>}

    </div>
  )
}

export default FormStatus