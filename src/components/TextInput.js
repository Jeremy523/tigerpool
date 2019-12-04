import React from 'react';

// generic component that works well for generic text field inputs such as:
// text, number, email, password, and date
const TextInput = props => {

  let formControl = "form-control";

  if (props.touched && !props.valid) {
    formControl = 'form-control control-error';
  }

  return (
    <input className={formControl} {...props} />
  );
}

export default TextInput;