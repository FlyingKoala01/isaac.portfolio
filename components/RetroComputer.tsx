import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function Computer() {
  const [_camera, setCamera] = useState();
  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState();
  const containerRef = useRef();

  useEffect(() => {
    const { current: container } = containerRef;

    const directionLight = new THREE.DirectionalLight(0xffffff, 1);
    directionLight.position.set(1, 1, 0);
    directionLight.castShadow = true;
    scene.add(directionLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const loader = new GLTFLoader();
    loader.load("/models/retro_computer.glb", (gltf) => {
      const model = gltf.scene;
      model.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material) {
          child.material.transparent = false; // Adjust if needed
          child.material.side = THREE.DoubleSide;
        }
      });

      model.scale.set(1, 1, 1); // Set to 1:1:1 scale for testing
      model.rotation.x = 0; // Reset rotation for visibility
      scene.add(model);
    });

    const sizes = {
      width: container.clientWidth,
      height: container.clientHeight,
    };

    const camera = new THREE.PerspectiveCamera(
      35,
      sizes.width / sizes.height,
      0.1,
      100
    );

    camera.position.set(0, 0, 3); // Move the camera further back

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true, // This ensures transparency
    });
    renderer.setClearColor(0xffffff, 0); // Transparent background

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0;

    // Disable user interactions
    controls.enableZoom = false;
    controls.enableRotate = false;
    controls.enablePan = false;

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <div className="w-full h-full relative" ref={containerRef}></div>;
}

export default Computer;
