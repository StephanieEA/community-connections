import React from 'react';


const Input =
({onChange, value, placeholder, type, className, checked, disabled, name}) => (
  <input  type={type}
          onChange={onChange}
          value={value}
          name={name}
          checked={checked}
          disabled={disabled}
          placeholder={placeholder}
          className={className}/>
)

export default Input;
