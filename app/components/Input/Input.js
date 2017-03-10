import React from 'react';


const Input =
({onChange, value, placeholder, type, className, checked, disabled, name, label}) => (
  <input  type={type}
          onChange={onChange}
          value={value}
          name={name}
          checked={checked}
          disabled={disabled}
          placeholder={placeholder}
          className={className}
          // label={value}
          // aria-label={label}
        //  aria-labelledby={label}
/>
)

export default Input;
