import { useDebugValue, useEffect, useState } from "react";

export default function useWindowSize() {
  const [size, setWindowSize] = useState({
    height: undefined,
    width: undefined,
  });

  useDebugValue(size)

  useEffect(() => {
    const handleResize = () => {    
      console.log("resize");
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
