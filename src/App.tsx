import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LeadListPage from './pages/LeadListPage'
import LeadDetailPage from './pages/LeadDetailPage'
import CreateLeadPage from './pages/CreateLeadPage'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LeadListPage />} />
          <Route path="/lead/:id" element={<LeadDetailPage />} />
          <Route path="/create-lead" element={<CreateLeadPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App