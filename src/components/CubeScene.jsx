import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';


const CubeScene = () => {
  const sceneRef = useRef();
  const rendererRef = useRef();
  const requestIdRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    camera.position.x = 2;
    camera.position.y =0;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Remove previous renderer's DOM element if it exists
    if (rendererRef.current) {
      const previousDomElement = rendererRef.current.domElement;
      if (previousDomElement.parentNode) {
        previousDomElement.parentNode.removeChild(previousDomElement);
      }
    }

    // Append the new renderer's DOM element to the sceneRef's div
    sceneRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xdb934b });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const animate = () => {
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
      requestIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(requestIdRef.current);
    };
  }, []);

  return <div ref={sceneRef} />;
};

export default CubeScene;