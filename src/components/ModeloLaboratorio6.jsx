import React, { useRef, useEffect, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { VideoTexture } from "three";

export default function ModeloLaboratorio6() {
  const gltf = useLoader(GLTFLoader, "/assets/living_room.glb");
  const modelRef = useRef();
  const videoRef = useRef(document.createElement("video"));
  const audioRef = useRef(new Audio("/assets/ambiente.mp3"));
  const [audioActivo, setAudioActivo] = useState(false);

  useEffect(() => {
    if (!gltf) return;

  
    videoRef.current.src = "/assets/video.mp4";
    videoRef.current.crossOrigin = "anonymous";
    videoRef.current.loop = true;
    videoRef.current.muted = true;
    videoRef.current.play();
    const videoTexture = new VideoTexture(videoRef.current);

    gltf.scene.traverse((child) => {
      if (child.isMesh) {

        if (child.name === "Cube011_Cube025-Mesh_1") {
          child.material = child.material.clone();
          child.material.map = videoTexture;
          child.material.needsUpdate = true;
        }
        console.log("🔹 Objeto encontrado:", child.name);
      }
    });

    audioRef.current.loop = true;
  }, [gltf]);

  const handleClick = (event) => {
    event.stopPropagation();
    const clickedObject = event.object.name;
    console.log("🖱️ Click en:", clickedObject);

    const objetosSonoros = [
      "Cube008_Cube019-Mesh",
      "Cube008_Cube019-Mesh_1"
    ];

    if (objetosSonoros.includes(clickedObject)) {
      if (audioRef.current.paused) {
        audioRef.current.play().catch((error) =>
          console.error("❌ Error al reproducir audio:", error)
        );
        setAudioActivo(true);
        console.log("🎵 Audio activado");
      } else {
        audioRef.current.pause();
        setAudioActivo(false);
        console.log("🔇 Audio detenido");
      }
    }
  };

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={1}
      position={[2.9, -1, 0]}
      onPointerDown={handleClick}
    />
  );
}