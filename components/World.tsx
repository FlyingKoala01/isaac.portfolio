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
  const [visitedLocations, setVisitedLocations] = useState([]);

  useEffect(() => {
    // Fetch data from API and update state
    fetch("/api/visitedLocations") // replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setVisitedLocations(data));

    if (!globeRef.current) {
      return;
    }

    (globeRef.current as any).pointOfView({ altitude: 1.9 }); // Zoom in closer to the globe

    const controls = (globeRef.current as any).controls();
    controls.autoRotate = true;

    // Define the max zoom out distance
    const maxZoomOutDistance = 300;
    controls.maxDistance = maxZoomOutDistance;
    controls.enableZoom = true;

    // Listener to restrict zooming out beyond the specified value
    controls.addEventListener("change", (event) => {
      if (event.target.object.position.length() > maxZoomOutDistance) {
        event.target.object.position.setLength(maxZoomOutDistance);
      }
    });
  }, [globeReady]);

  return (
    <>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        onGlobeReady={() => setGlobeReady(true)}
        height={440}
        width={440}
        animateIn={false}
        backgroundColor={"#1A1A1A"}
        ref={globeRef}
        hexBinPointsData={visitedLocations}
        hexBinPointWeight="pop"
        hexAltitude={(d) => d.sumWeight * 6e-8}
        hexBinResolution={4}
        hexTopColor={() => "white"}
        hexSideColor={() => "white"}
        hexBinMerge={true}
        enablePointerInteraction={false}
        labelsData={visitedLocations}
        labelLat="lat"
        labelLng="lng"
        labelText="name"
        labelSize={1.5}
        labelColor={() => "white"}
      />
    </>
  );
};

export default World;
