import { useEffect, useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

function ModeloLaboratorio6() {
  const gltf = useLoader(GLTFLoader, "/assets/LivingRoom.glb");
  const modelRef = useRef();
  const audioRef = useRef(new Audio("/assets/sonido.mp3"));
  const videoRef = useRef(document.createElement("video"));
  const [audioActivo, setAudioActivo] = useState(false);

  useEffect(() => {
    if (!gltf) return;

    // Configuración del audio
    audioRef.current.loop = true;

    // Configuración del video
    videoRef.current.src = "/assets/video.mp4";
    videoRef.current.crossOrigin = "anonymous";
    videoRef.current.loop = true;
    videoRef.current.muted = true;
    videoRef.current.playsInline = true;

    const videoTexture = new THREE.VideoTexture(videoRef.current);
    videoTexture.flipY = false;
    videoTexture.needsUpdate = true;

    // Recorremos todo el modelo para encontrar la pantalla
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        console.log("Objeto encontrado:", child.name);

        if (child.name === "mesh1755818725_1") {
          child.material = child.material.clone();
          child.material.map = videoTexture;
          child.material.needsUpdate = true;

          console.log("Video aplicado a la pantalla:", child.name);
        }
      }
    });

    // Reproducir el video
    videoRef.current.play().catch((error) => {
      console.error("Error al reproducir video:", error);
    });

    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;

      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    };
  }, [gltf]);

  const handleClick = (event) => {
    event.stopPropagation();
    const clickedObject = event.object.name;
    console.log("Objeto clickeado:", clickedObject);

    const nombreObjetoSonido = "group265941632";

    if (clickedObject === nombreObjetoSonido) {
      if (audioRef.current.paused) {
        audioRef.current.play().catch((error) => {
          console.error("Error al reproducir audio:", error);
        });
        setAudioActivo(true);
        console.log("🔊 Audio activado");
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setAudioActivo(false);
        console.log("🔇 Audio detenido");
      }
    }
  };

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={1.5}
      position={[0, -1, 0]}
      onPointerDown={handleClick}
    />
  );
}

export default ModeloLaboratorio6;