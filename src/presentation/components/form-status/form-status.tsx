import React from 'react'
import styles from './form-status.module.scss'
import Spinner from '../spinner/spinner';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const FormStatus: React.FC<Props> = () => {
  return (
    <div className={styles.errorWrap}>
      <Spinner className={styles.spinner} />
      <span className={styles.error}>
        Erro
      </span>
    </div>
  )
}

export default FormStatus