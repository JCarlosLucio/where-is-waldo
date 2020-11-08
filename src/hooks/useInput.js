import { useState } from 'react';

function useInput(initialVal) {
  const [state, setState] = useState(initialVal);

  const handleChange = (e) => {
    const { value, maxLength } = e.target;
    const text = value.slice(0, maxLength);
    setState(text);
  };

  const reset = () => setState('');

  return [state, handleChange, reset];
}

export default useInput;
