import React from 'react'

const Button = ({onClick, text, name, className}) =>
  <button onClick={onClick}
          name={name}
          aria-label={text}
          className={className}>
    {text}
  </button>

export default Button
