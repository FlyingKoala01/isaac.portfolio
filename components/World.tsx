"use client";

import { useState, useEffect, useRef, forwardRef } from "react";
import dynamic from "next/dynamic";

const GlobeTmpl = dynamic(() => import("./GlobeWrapper"), {
  ssr: false,
});
const Globe = forwardRef((props: any, ref) => (
  <GlobeTmpl {...props} forwardRef={ref} />
));

const World = () => {
  const globeRef = useRef();
  const [globeReady, setGlobeReady] = useState(false);

  useEffect(() => {
    if (!globeRef.current) {
      return;
    }
    (globeRef.current as any).pointOfView({ altitude: 1.5 }); // Zoom in closer to the globe    (globeRef.current as any).controls().enableZoom = false;
    (globeRef.current as any).controls().autoRotate = true;
    (globeRef.current as any).controls().enableRotate = false; // Disable manual rotation
  }, [globeReady]);

  return (
    <>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        onGlobeReady={() => setGlobeReady(true)}
        height={450}
        width={450}
        animateIn={false}
        backgroundColor={"#1A1A1A"}
        ref={globeRef}
      />
    </>
  );
};

export default World;
