import AnimatedCursor from "react-animated-cursor";
import { useState, useEffect } from "react";

export const ConditionalCursor = () => {
  const MOBILE_BREAKPOINT = 768;

  const [isMobile, setIsMobile] = useState(() => {
    return (
      typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT
    );
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return null;
  }

  return (
    <AnimatedCursor
      color="0,0,0"
      innerSize={20}
      outerSize={40}
      innerScale={1}
      outerScale={2}
      outerAlpha={1}
      trailingSpeed={1}
      innerStyle={{
        backgroundColor: "#fff",
        mixBlendMode: "revert",
      }}
      outerStyle={{
        mixBlendMode: "difference",
      }}
    />
  );
};
