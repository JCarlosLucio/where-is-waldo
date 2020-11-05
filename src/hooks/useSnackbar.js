import { useState } from 'react';
import useTimedToggle from './useTimedToggle';

function useSnackbar(initialText, initialBg, interval) {
  const [open, toggle] = useTimedToggle(interval);
  const [text, setText] = useState(initialText);
  const [bg, setBg] = useState(initialBg);

  return [text, bg, open, setText, setBg, toggle];
}

export default useSnackbar;
