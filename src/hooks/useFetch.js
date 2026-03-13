import { useState, useEffect } from 'react'
import apiClient from '@services/apiClient'

/**
 * Hook genérico para llamadas a la API.
 * @param {string} url - Endpoint relativo a la base URL.
 * @param {object} [options] - Opciones adicionales para la petición.
 */
function useFetch(url, options = {}) {
  const [data, setData]       = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    if (!url) return
    setLoading(true)
    setError(null)

    const controller = new AbortController()

    apiClient
      .get(url, { signal: controller.signal, ...options })
      .then((res) => setData(res.data))
      .catch((err) => {
        if (err.name !== 'CanceledError') setError(err)
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return { data, loading, error }
}

export default useFetch
