import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login, isLoggedIn } from '../lib/api.js'

export default function Login() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  if (isLoggedIn()) {
    navigate('/admin/dashboard')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(password)
      navigate('/admin/dashboard')
    } catch (err) {
      setError(err.message || 'Wrong password.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-canvas grid-canvas flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm border border-hairline rounded-xl bg-frame/60 backdrop-blur p-8"
      >
        <p className="tick text-xs text-cursorBlue mb-2">Frame — Admin · restricted</p>
        <h1 className="font-display text-xl font-semibold text-paper mb-6">Sign in</h1>
        <label className="tick text-xs text-muted block mb-2" htmlFor="password">
          Admin password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-canvas border border-hairline rounded-lg px-3 py-2.5 text-paper text-sm mb-4 focus:border-cursorBlue outline-none"
          autoFocus
          required
        />
        {error && <p className="text-xs text-cursorOrange mb-4">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 rounded-lg bg-cursorBlue text-canvas font-medium text-sm hover:bg-cursorBlue/90 transition-colors disabled:opacity-60"
        >
          {loading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  )
}
