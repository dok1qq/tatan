import { useEffect, useRef } from 'react';

export function useInit(cb: () => void) {
  const init = useRef<boolean>(false);

  useEffect(() => {
    if (init.current) {
      return;
    }

    init.current = true;
    cb();
  }, []);
}
