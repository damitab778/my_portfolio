import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "../context/ActiveSectionContext";

export function useSectionInView(id: string) {
  const { setActiveSection } = useActiveSection();
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) setActiveSection(id);
  }, [inView, id, setActiveSection]);

  return ref;
}
