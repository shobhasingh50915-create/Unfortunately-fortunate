import { useRef, useCallback, useState } from "react";

export const useTilt = (maxTilt = 15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg)");

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTransform(
        `rotateY(${x * maxTilt}deg) rotateX(${-y * maxTilt}deg)`
      );
    },
    [maxTilt]
  );

  const handleMouseLeave = useCallback(() => {
    setTransform("rotateY(0deg) rotateX(0deg)");
  }, []);

  return { ref, transform, handleMouseMove, handleMouseLeave };
};
