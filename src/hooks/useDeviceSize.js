import useWindowSize from "./useWindowSize";

export default function useDeviceSize() {
  const { width } = useWindowSize();

  if (width < 500) return "SMALL";
  if (width < 900) return "MEDIUM";
  return "LARGE";
}
