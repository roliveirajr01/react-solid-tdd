import React, { useContext } from 'react'
import styles from './input.module.scss'
import Context from '@/presentation/contexts/forms/form-context'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const error = props.name ? state[`${props.name}Error`] : ''

  const getStatus = (): string => {
    return '🔴'
  }

  const getTitle = (): string => {
    return error
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className={styles.inputWrap}>
      <input {...props} data-testid={props.name} onChange={handleChange} />
      <span data-testid={`${props.name}-status`} title={getTitle()} className={styles.status}>{getStatus()}</span>
    </div>
  )
}

export default Input