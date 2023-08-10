import React, {useRef, useEffect} from 'react';
import * as THREE from 'three'

const CubeScene = () =>{




    const sceneRef= useRef()
    const rendererRef = useRef()
    const cubeRef = useRef()
    const requestIdRef = useRef()


    useEffect(() => {
        // Scene , camera , and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth , window.innerHeight, 0.1,100)
        camera.position.z = 5;

        const renderer = new THREE.WebGL1Renderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        rendererRef.current = renderer;
        sceneRef.current.appendChild(renderer.domElement);


        const geometry= new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial()
        const cube = new THREE.Mesh(geometry,material);
        scene.add(cube);
        cubeRef.current = cube;


        const animate = () => {
            cube.rotation.x += 0.01

            renderer.render(scene,camera);
            requestIdRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () =>{
            cancelAnimationFrame(requestIdRef.current);
        };
    }, []);

    return <div ref={sceneRef}/>
}

export default CubeScene;