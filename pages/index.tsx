import React, { useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import videoSource from "../images/video/world.mp4";
import Layout from "../components/Layout";
import useIsMobile from "../hooks/useIsMobile";
import ParticleBackground from "../components/Particles";
import dynamic from "next/dynamic";

function App() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isMobile = useIsMobile();


  return (
    <Layout>
      <div className="bg-white">
        <h1 className="text-white">isaac iglesias vila</h1>
        <h2 className="text-white">
          An aspiring ICT engineer interested in<br></br> the many diverse
          fields concerning technology.
        </h2>
      </div>
    </Layout>
  );
}

export default App;
