import React, { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";
import { DivContainer, DivSpinner } from "./ScrollPage";

const ScrollModelAnimation = () => {
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState();
  const [_camera, setCamera] = useState();
  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState();

  const refContainer = useRef();

  useEffect(() => {
    const parameters = {
      materialColor: "#ffeded",
    };
    const { current: container } = refContainer;

    if (container && !renderer) {
      //Texture
      const textureLoader = new THREE.TextureLoader();

      //Material
      const material = new THREE.MeshToonMaterial({
        color: parameters.materialColor,
      });

      //Object
      const objectDistance = 4;
      const mesh1 = new THREE.Mesh(
        new THREE.TorusGeometry(1, 0.4, 16, 60),
        material
      );

      const mesh2 = new THREE.Mesh(new THREE.SphereGeometry(1), material);
      const mesh3 = new THREE.Mesh(new THREE.SphereGeometry(1), material);
      const mesh4 = new THREE.Mesh(new THREE.SphereGeometry(1), material);
      const mesh5 = new THREE.Mesh(new THREE.SphereGeometry(1), material);

      mesh1.position.x = 3;
      mesh2.position.x = -3;
      mesh3.position.x = 3;
      mesh4.position.x = -3;
      mesh5.position.x = 3;

      mesh1.position.y = -objectDistance * 0;
      mesh2.position.y = -objectDistance * 1;
      mesh3.position.y = -objectDistance * 2;
      mesh4.position.y = -objectDistance * 3;
      mesh5.position.y = -objectDistance * 4;

      scene.add(mesh1, mesh2, mesh3, mesh4, mesh5);
      const sectionMeshes = [mesh1, mesh2, mesh3, mesh4, mesh5];

      //Lights
      const directionLight = new THREE.DirectionalLight(0xffffff, 1);
      directionLight.position.set(1, 1, 0);
      directionLight.castShadow = true;
      scene.add(directionLight);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      //sizes
      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      //camera
      //Camera Group
      const cameraGroup = new THREE.Group();
      scene.add(cameraGroup);

      //Base camera
      const camera = new THREE.PerspectiveCamera(
        35,
        sizes.width / sizes.height,
        0.1,
        100
      );

      camera.position.z = 6;
      cameraGroup.add(camera);

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.shadowMap.enabled = true;
      container.appendChild(renderer.domElement);

      //Resize
      window.addEventListener("resize", () => {
        //update sizes
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        //update camera
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        //update renderer
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });

      //Controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;

      //Scroll
      let scrollY = window.scrollY;
      let currentSection = 0;

      window.addEventListener("scroll", () => {
        scrollY = window.scrollY;
        const newSection = Math.round(scrollY / sizes.height);

        if (newSection !== currentSection) {
          currentSection = newSection;
          cameraGroup.position.y = -objectDistance * currentSection;

          gsap.to(sectionMeshes[currentSection].rotation, {
            duration: 1.5,
            ease: "power2.inOut",
            x: "+=6",
            y: "+=3",
            z: "+=1.5",
          });
        }
      });

      //Cursor
      const cursor = {}
      cursor.x = 0
      cursor.y = 
      window.addEventListener("mousemove", (e) => {
        cursor.x = e.clientX / sizes.width - 0.5;
        cursor.y = e.clientY / sizes.height - 0.5;
      })
      // Animate
      const clock = new THREE.Clock()
      let previousTime = 0

      const animate = () => {
        const colapsedTime = clock.getElapsedTime()
        const deltaTime = colapsedTime - previousTime
        previousTime = colapsedTime

        //animate camera
        camera.position.y = (-scrollY / sizes.height) * objectDistance

        const parallaxX = -cursor.x * 0.5
        const parallaxY = cursor.y * 0.5

        cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime
        cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltaTime

        //animate meshes
        for (const mesh of sectionMeshes) {
            mesh.rotation.x += 0.1 * deltaTime
            mesh.rotation.y += 0.12 * deltaTime
        }

        renderer.render(scene, camera)
        window.requestAnimationFrame(animate)
      }
      animate()
    }
  }, []);

  return (
    <DivContainer ref={refContainer}>
        {loading && <DivSpinner />}
    </DivContainer>
  )
};

export default ScrollModelAnimation;
