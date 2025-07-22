import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ 
        background: 'white', 
        borderBottom: '1px solid #e5e7eb', 
        padding: '1rem 0' 
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          margin: '0 auto',
          maxWidth: '1200px',
          padding: '0 2rem'
        }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '600' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Popl Leads
            </Link>
          </h1>
          {!isHomePage && (
            <Link to="/" className="btn">
              ← Back to Leads
            </Link>
          )}
        </div>
      </header>
      <main style={{ flex: 1 }}>
        {children}
      </main>
    </div>
  )
}