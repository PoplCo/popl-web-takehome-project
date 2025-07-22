import { useParams } from 'react-router-dom'

export default function LeadDetailPage() {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="container">
      <div style={{ textAlign: 'center', padding: '0rem 2rem 2rem 2rem' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👤</div>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Lead Detail Page</h1>
        <p style={{ color: '#6b7280', fontSize: '1.125rem', marginBottom: '2rem' }}>
          Current lead ID: <code>{id}</code>
        </p>

        <div style={{
          textAlign: 'left',
          maxWidth: '700px',
          margin: '0 auto',
          background: '#f8fafc',
          padding: '1.5rem',
          borderRadius: '8px',
          border: '2px dashed #d1d5db'
        }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#374151' }}>🎯 Your Mission:</h3>
          <ul style={{ margin: 0, color: '#6b7280' }}>
            <li>Fetch lead data using the ID from the URL</li>
            <li>Display all lead information in organized sections</li>
            <li>Show contact info, company details, tags, and notes</li>
            <li>Format dates nicely for humans to read</li>
            <li>Handle messy data gracefully (empty fields, null values)</li>
            <li>Show appropriate error messages for missing leads</li>
          </ul>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
            🎨 <strong>Design Tip:</strong> Differentiate how the messy data (see Dr. Messy Data) is handled
          </p>
          <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
            💡 <strong>Bonus:</strong> Consider using CSS Grid or Flexbox for a clean, responsive layout
          </p>
        </div>

        {/* Sample data preview */}
        <div style={{
          marginTop: '3rem',
          background: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          padding: '1.5rem',
          textAlign: 'left',
          maxWidth: '500px',
          margin: '3rem auto 0'
        }}>
          <h4 style={{ margin: '0 0 1rem 0', color: '#374151' }}>Sample Lead Data Structure:</h4>
          <pre style={{
            fontSize: '0.75rem',
            color: '#6b7280',
            overflow: 'auto',
            background: '#f9fafb',
            padding: '0.75rem',
            borderRadius: '4px'
          }}>
            {`{
  "id": "uuid-string",
  "name": "John Doe",
  "email": "john@company.com",
  "company": "Acme Corp",
  "title": "CTO", 
  "phone": "+1 (555) 123-4567",
  "tags": ["enterprise", "tech"],
  "notes": "Long notes here...",
  "createdAt": "2024-03-15T08:30:00Z"
}`}
          </pre>
        </div>
      </div>
    </div>
  )
}