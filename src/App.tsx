import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import { useState } from 'react'
import { Login } from './pages/Login'
import Dashboard from './pages/Dashboard'
import './App.css'

function App() {
  // Mock state for authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <Router>
      <Routes>
        {/* Ruta de Login */}
        <Route
          path='/login'
          element={
            isAuthenticated ? (
              <Navigate to='/dashboard' replace />
            ) : (
              <Login setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />

        {/* Ruta protegida de Dashboard */}
        <Route
          path='/dashboard'
          element={
            isAuthenticated ? (
              <Dashboard setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <Navigate to='/login' replace />
            )
          }
        />

        {/* Redirige cualquier ruta desconocida a /login */}
        <Route path='*' element={<Navigate to='/login' replace />} />
      </Routes>
    </Router>
  )
}

export default App
