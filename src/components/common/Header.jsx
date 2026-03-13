import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h2 className={styles.pageTitle}>Bienvenido</h2>
      </div>
      <div className={styles.right}>
        <div className={styles.avatar}>US</div>
      </div>
    </header>
  )
}

export default Header
