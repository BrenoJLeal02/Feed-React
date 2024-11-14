
import styles from './Header.module.css'
import ignitelogo from '../../assets/ignite-logo.svg'
export const Header = () => {
  return (
    <header  className={styles.header}>
      <img src={ignitelogo} alt="logo" />
    </header>
  )
}

