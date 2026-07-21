import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AdminLogin from './admin/Login.jsx'
import AdminDashboard from './admin/Dashboard.jsx'
import RequireAuth from './admin/RequireAuth.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route
        path="/admin/dashboard"
        element={
          <RequireAuth>
            <AdminDashboard />
          </RequireAuth>
        }
      />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}
