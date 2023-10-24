import React, { useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import videoSource from "../images/video/world.mp4";
import Layout from "../components/Layout";
import useIsMobile from "../hooks/useIsMobile";
import ParticleBackground from "../components/Particles";

function App() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // slow down to half speed
    }
  }, []);

  const videoFadeOut = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <Layout>
      <div className="bg-white">
        <h1 className="text-white">isaac iglesias vila</h1>
        <h2 className="text-white">
          An aspiring ICT engineer interested in<br></br> the many diverse
          fields concerning technology.
        </h2>
      </div>
      <ParticleBackground />
    </Layout>
  );
}

export default App;
