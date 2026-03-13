import apiClient from './apiClient'

export const clientesService = {
  getAll:   (params)     => apiClient.get('/clientes', { params }),
  getById:  (id)         => apiClient.get(`/clientes/${id}`),
  create:   (data)       => apiClient.post('/clientes', data),
  update:   (id, data)   => apiClient.put(`/clientes/${id}`, data),
  remove:   (id)         => apiClient.delete(`/clientes/${id}`),
}
