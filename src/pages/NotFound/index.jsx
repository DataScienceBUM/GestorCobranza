import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '4rem' }}>
      <h1>404</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/dashboard">Volver al inicio</Link>
    </div>
  )
}

export default NotFound
