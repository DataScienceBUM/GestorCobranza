import apiClient from './apiClient'

export const cobranzaService = {
  getAll:   (params)   => apiClient.get('/cobranza', { params }),
  getById:  (id)       => apiClient.get(`/cobranza/${id}`),
  create:   (data)     => apiClient.post('/cobranza', data),
  update:   (id, data) => apiClient.put(`/cobranza/${id}`, data),
  remove:   (id)       => apiClient.delete(`/cobranza/${id}`),
  pagar:    (id, data) => apiClient.post(`/cobranza/${id}/pagar`, data),
}
