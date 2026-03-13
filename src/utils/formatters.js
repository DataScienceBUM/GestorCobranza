/**
 * Formatea un número como moneda MXN.
 * @param {number} amount
 * @returns {string}
 */
export function formatCurrency(amount) {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  }).format(amount)
}

/**
 * Formatea una fecha ISO a formato local.
 * @param {string} isoDate
 * @returns {string}
 */
export function formatDate(isoDate) {
  return new Intl.DateTimeFormat('es-MX', {
    year: 'numeric', month: 'long', day: 'numeric',
  }).format(new Date(isoDate))
}

/**
 * Capitaliza la primera letra de un string.
 * @param {string} str
 * @returns {string}
 */
export function capitalize(str = '') {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

/**
 * Trunca un texto a n caracteres.
 * @param {string} text
 * @param {number} maxLength
 * @returns {string}
 */
export function truncate(text = '', maxLength = 50) {
  return text.length > maxLength ? `${text.slice(0, maxLength)}…` : text
}
