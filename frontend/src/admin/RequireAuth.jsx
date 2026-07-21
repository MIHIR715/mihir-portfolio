import { Navigate } from 'react-router-dom'
import { isLoggedIn } from '../lib/api.js'

export default function RequireAuth({ children }) {
  if (!isLoggedIn()) {
    return <Navigate to="/admin" replace />
  }
  return children
}
