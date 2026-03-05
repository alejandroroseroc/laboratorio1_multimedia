import { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

function ObjetoLaboratorio3() {
  const objetoRef = useRef();

  const [texturaBase, texturaAlpha, texturaEmissive] = useLoader(
    TextureLoader,
    ["/assets/texture1.jpg", "/assets/baked.jpg", "/assets/texture2.jpg"]
  );

  const [nota1, nota2, nota3] = useLoader(TextureLoader, [
    "/assets/note1.png",
    "/assets/note2.png",
    "/assets/note3.png",
  ]);

  const [notas, setNotas] = useState([]);

  const reproducirNotas = () => {
    const audio = new Audio("/assets/ambiente.mp3");
    audio.play();

    const nuevasNotas = [
      {
        id: Date.now() + 1,
        position: [0, 1.8, 0],
        texture: nota1,
      },
      {
        id: Date.now() + 2,
        position: [0.6, 1.5, 0],
        texture: nota2,
      },
      {
        id: Date.now() + 3,
        position: [-0.6, 1.6, 0],
        texture: nota3,
      },
    ];

    setNotas((prev) => [...prev, ...nuevasNotas]);
  };

  useFrame(() => {
    setNotas((prevNotas) =>
      prevNotas
        .map((nota) => ({
          ...nota,
          position: [
            nota.position[0],
            nota.position[1] + 0.02,
            nota.position[2],
          ],
        }))
        .filter((nota) => nota.position[1] < 4)
    );
  });

  return (
    <>
      <mesh
        ref={objetoRef}
        position={[0, 0, 0]}
        rotation={[0, 0.4, 0]}
        onClick={reproducirNotas}
      >
        <cylinderGeometry args={[1.2, 1.2, 3, 32]} />
        <meshStandardMaterial
          map={texturaBase}
          alphaMap={texturaAlpha}
          emissiveMap={texturaEmissive}
          emissive={new THREE.Color("white")}
          transparent={true}
        />
      </mesh>

      {notas.map((nota) => (
        <sprite key={nota.id} position={nota.position} scale={[0.6, 0.6, 0.6]}>
          <spriteMaterial map={nota.texture} transparent />
        </sprite>
      ))}
    </>
  );
}

export default ObjetoLaboratorio3;