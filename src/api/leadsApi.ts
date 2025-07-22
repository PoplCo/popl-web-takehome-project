import { Lead } from '../types';
import { api } from './api';

// 📡 Lead API endpoints - All the CRUD operations you'll need!
// These correspond to json-server's REST API conventions
export const leadsApi = {
  // GET /leads - Fetch all leads for the list page
  getAll: () => api.get<Lead[]>('/leads'),
  
  // GET /leads/:id - Fetch a single lead for the detail page  
  getById: (id: string) => api.get<Lead>(`/leads/${id}`),
  
  // POST /leads - Create a new lead (for the form submission)
  create: (data: Partial<Lead>) => api.post<Lead>('/leads', data),
  
  // PUT /leads/:id - Full replacement update (bonus feature)
  update: (id: string, data: Partial<Lead>) => api.put<Lead>(`/leads/${id}`, data),
  
  // DELETE /leads/:id - Remove a lead (bonus feature)
  delete: (id: string) => api.delete(`/leads/${id}`),
};