import { useState } from 'react';
import useTimedToggle from './useTimedToggle';

function useSnackbar(initialContent, interval) {
  const [content, setContent] = useState(initialContent);
  const [open, toggle] = useTimedToggle(interval);

  return [content, open, setContent, toggle];
}

export default useSnackbar;
