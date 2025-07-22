import { useNavigate } from 'react-router-dom'

export default function CreateLeadPage() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <div style={{ textAlign: 'center', padding: '0rem 2rem 2rem 2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Create Lead Page</h1>
        <div style={{
          textAlign: 'left',
          maxWidth: '700px',
          margin: '0 auto',
          background: '#f8fafc',
          padding: '1.5rem',
          borderRadius: '8px',
          border: '2px dashed #d1d5db'
        }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#374151' }}>📝 Your Mission:</h3>
          <ul style={{ margin: 0, color: '#6b7280' }}>
            <li>Create a form with all lead fields (name, email, company, etc.)</li>
            <li>Add form validation (name and email are required)</li>
            <li>Handle tags input (comma-separated values)</li>
            <li>Use React Query (or axios) to create the lead</li>
            <li>Show loading state while creating</li>
            <li>Navigate to the new lead's detail page on success</li>
            <li>Handle and display error states</li>
          </ul>
        </div>
        {/* Mock form preview */}
        <div style={{
          marginTop: '3rem',
          background: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          padding: '2rem',
          textAlign: 'left',
          maxWidth: '500px',
          margin: '3rem auto 0'
        }}>
          <h4 style={{ margin: '0 0 1.5rem 0', color: '#374151', textAlign: 'center' }}>
            Your Form Will Look Something Like:
          </h4>

          <div className="form-group">
            <label className="form-label">Name *</label>
            <div style={{
              padding: '0.5rem 0.75rem',
              border: '2px dashed #d1d5db',
              borderRadius: '6px',
              color: '#9ca3af',
              fontStyle: 'italic'
            }}>
              &lt;input type="text" required /&gt;
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Email *</label>
            <div style={{
              padding: '0.5rem 0.75rem',
              border: '2px dashed #d1d5db',
              borderRadius: '6px',
              color: '#9ca3af',
              fontStyle: 'italic'
            }}>
              &lt;input type="email" required /&gt;
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Tags</label>
            <div style={{
              padding: '0.5rem 0.75rem',
              border: '2px dashed #d1d5db',
              borderRadius: '6px',
              color: '#9ca3af',
              fontStyle: 'italic',
              fontSize: '0.875rem'
            }}>
              enterprise, high-priority, tech
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <button className="btn" onClick={() => navigate('/')}>
              Cancel
            </button>
            <span style={{ margin: '0 0.5rem' }}></span>
            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              border: '2px dashed #3b82f6',
              borderRadius: '6px',
              color: '#3b82f6',
              fontStyle: 'italic',
              fontSize: '0.875rem'
            }}>
              &lt;Create Lead Button&gt;
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}