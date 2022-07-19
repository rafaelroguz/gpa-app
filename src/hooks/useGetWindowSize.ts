import { useEffect, useState } from 'react';

interface ScreenSize {
  height?: number;
  width?: number;
}

const useGetWindowSize = () => {
  const [windowSize, setWindowSize] = useState<ScreenSize>({
    height: undefined,
    width: undefined,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [setWindowSize]);

  return windowSize;
};

export default useGetWindowSize;
