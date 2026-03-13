import { Outlet } from 'react-router-dom'
import Sidebar from '@components/common/Sidebar'
import Header from '@components/common/Header'
import styles from './MainLayout.module.css'

function MainLayout() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.content}>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout
