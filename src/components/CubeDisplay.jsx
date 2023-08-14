import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const CubeDisplay = () =>{

    // use ref is used in this context to prevent duplication of scenes
    const sceneRef = useRef();
    const rendererRef = useRef();
    const requestIdRef = useRef();

    //I use use effect to update the cubes frames as they rotate so my project wont show a stil cube
    useEffect(()=> {

        //Establishing a scene where all my renders take place
        const scene = new THREE.Scene();

        //You need to have a camera along with a scene and renderer to have a functional scene
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

        //Moreover the xyz position needs to be set 
        camera.position.z = 5;
        camera.position.x = 3.5;
        camera.position.y =0;

        //Making the renderer/ setting it to the size of user screen
        const renderer = new THREE.WebGL1Renderer({antialias:true});
        renderer.setSize(window.innerWidth,window.innerHeight);

        //Ensures there is no duplication of scenes on top of one another
        if(rendererRef.current){
            
            const previousDomElement = rendererRef.current.domElement;

            if(previousDomElement.parentNode){
                previousDomElement.parentNode.removeChild(previousDomElement);

            }
        }

        
    // Append the new renderer's DOM element to the sceneRef's div
    sceneRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    //Making a cube with basic mesh material

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xdb934b});
    const cube = new THREE.Mesh(geometry, material);

    //Then we add the cube to the scene
    scene.add(cube);

    const animate = () =>{
        cube.rotation.y += 0.01;


        renderer.render(scene,camera);
        requestIdRef.current = requestAnimationFrame(animate)
    }

    animate();

    return () => {
        cancelAnimationFrame(requestIdRef.current);
    }
    }, []);

    return <div ref={sceneRef} />;
}

export default CubeDisplay