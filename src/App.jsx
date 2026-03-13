import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '@components/layouts/MainLayout'
import Dashboard from '@pages/Dashboard'
import Clientes from '@pages/Clientes'
import Cobranza from '@pages/Cobranza'
import Reportes from '@pages/Reportes'
import Login from '@pages/Login'
import NotFound from '@pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta pública */}
        <Route path="/login" element={<Login />} />

        {/* Rutas protegidas con layout principal */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="cobranza" element={<Cobranza />} />
          <Route path="reportes" element={<Reportes />} />
        </Route>

        {/* Ruta 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
