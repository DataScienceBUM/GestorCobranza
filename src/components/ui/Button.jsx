function Button({ children, variant = 'primary', size = 'md', onClick, disabled = false, type = 'button' }) {
  const base = 'btn'
  const variantClass = `btn--${variant}`
  const sizeClass = `btn--${size}`

  return (
    <button
      type={type}
      className={`${base} ${variantClass} ${sizeClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
