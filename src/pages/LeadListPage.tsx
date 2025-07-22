import { Link } from 'react-router-dom'
// TODO: Import useSelector, useDispatch from react-redux
// TODO: Import RootState from '../store'
// TODO: Import actions from '../store/userPreferencesSlice'
// TODO: Import useQuery from @tanstack/react-query
// TODO: Import leadsApi from '../api'
// TODO: Import Lead type from '../types'

export default function LeadListPage() {
  // TODO: Get search term and sort preference from Redux
  // const searchTerm = useSelector((state: RootState) => state.userPreferences.searchTerm)
  // const sortBy = useSelector((state: RootState) => state.userPreferences.sortBy)
  // const dispatch = useDispatch()

  // TODO: Use React Query to fetch leads
  // const { data: leads, isLoading, error } = useQuery({...})

  // TODO: Create filtered and sorted leads using useMemo
  // Filter by search term (from Redux) and sort by preference (from Redux)

  // TODO: Handle search input changes by dispatching to Redux
  // const handleSearchChange = (value: string) => {
  //   dispatch(setSearchTerm(value))
  // }

  // TODO: Handle sort changes by dispatching to Redux  
  // const handleSortChange = (value: 'name' | 'createdAt') => {
  //   dispatch(setSortBy(value))
  // }

  return (
    <div className="container">
      <div style={{ textAlign: 'center', padding: '0rem 2rem 2rem 2rem' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎯</div>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Lead List Page</h1>
        <p style={{ color: '#6b7280', fontSize: '1.125rem', marginBottom: '2rem' }}>
          This will be the center of your application.
        </p>

        <div style={{
          textAlign: 'left',
          maxWidth: '600px',
          margin: '0 auto',
          background: '#f8fafc',
          padding: '1.5rem',
          borderRadius: '8px',
          border: '2px dashed #d1d5db'
        }}>
          <h3 style={{ margin: '0 0 1rem 0', color: '#374151' }}>Your Mission:</h3>
          <ul style={{ margin: 0, color: '#6b7280' }}>
            <li>Fetch and display leads from the API</li>
            <li>Add search functionality (name, email, company)</li>
            <li>Add sorting (by name or creation date)</li>
            <li>Use Redux to persist search term and sort preference</li>
            <li>Make each lead clickable to navigate to details</li>
            <li>Add a floating action button for creating new leads</li>
          </ul>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
            💡 <strong>Important:</strong> Check out the API endpoints in <code>src/api/</code> and the mock data in <code>db.json</code>
          </p>
          <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginTop: '0.5rem' }}>
            <strong>Redux:</strong> Check out the store structure in <code>src/store/</code> for state management
          </p>
          <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginTop: '0.5rem' }}>
            <strong>Data Fetching:</strong> You can use React Query (recommended) or useState + useEffect — both approaches work
          </p>
        </div>

        {/* Temporary navigation for development */}
        <div style={{
          marginTop: '3rem',
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link to="/lead/f47ac10b-58cc-4372-a567-0e02b2c3d479" className="btn">
            View Sample Lead Detail
          </Link>
          <Link to="/create-lead" className="btn btn-primary">
            Create New Lead
          </Link>
        </div>
      </div>
    </div>
  )
}