import React, { useRef } from "react";
import { Sparkles, useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import * as THREE from "three";

const Jet = (props: GroupProps) => {
    const ref = useRef<THREE.Group>(null);
    const gltf = useGLTF("/models/Jet.glb");

    const { nodes, materials } = gltf as unknown as THREE.Group & {
        nodes: {
            Jet_Cube024_1: THREE.Mesh;
            Jet_Cube024_1_1: THREE.Mesh;
            Jet_Cube024_1_2: THREE.Mesh;
            Jet_Cube024_1_3: THREE.Mesh;
        };
        materials: {
            "455A64": THREE.MeshStandardMaterial;
            "80DEEA": THREE.MeshStandardMaterial;
            "1A1A1A": THREE.MeshStandardMaterial;
            "78909C": THREE.MeshStandardMaterial;
        };
    };

    return (
        <group ref={ref} {...props} dispose={null}>
            <Sparkles
                position={[0, 0, -7]}
                color="#e2e2e2"
                count={100}
                scale={1}
                size={7}
                speed={0.3}
            />

            <mesh geometry={nodes.Jet_Cube024_1.geometry} material={materials["455A64"]} />
            <mesh geometry={nodes.Jet_Cube024_1_1.geometry} material={materials["80DEEA"]} />
            <mesh geometry={nodes.Jet_Cube024_1_2.geometry} material={materials["1A1A1A"]} />
            <mesh geometry={nodes.Jet_Cube024_1_3.geometry} material={materials["78909C"]} />
        </group>
    );
};

export default Jet;

useGLTF.preload("/models/Jet.glb");

// type Control = "KeyW" | "KeyS" | "KeyA" | "KeyD";

// type MovementControlsProps = {
//     group: Ref<THREE.Group>;
//     children?: React.ReactNode;
// };

// const MovementControls = ({ group, children }: MovementControlsProps) => {
//     // Define movement speed and key bindings
//     const speed = 10;
//     const controls = {
//         KeyW: "forward",
//         KeyS: "backward",
//         KeyA: "left",
//         KeyD: "right",
//     };

//     // Set up a ref to store the current direction of movement
//     const direction = useRef<string>("");

//     // Add event listener to set direction on key down
//     useEffect(() => {
//         const onKeyDown = (e: KeyboardEvent) => {
//             const code = e.code as Control;
//             if (controls[code]) {
//                 direction.current = controls[code];
//             }
//         };
//         document.addEventListener("keydown", onKeyDown);
//         return () => {
//             document.removeEventListener("keydown", onKeyDown);
//         };
//     }, []);

//     // Set up the rendering loop to move the group in the current direction
//     useFrame((_state, delta) => {
//         if (!direction.current) {
//             return;
//         }
//         const offset = new THREE.Vector3();
//         switch (direction.current) {
//             case "forward":
//                 offset.z = -speed * delta;
//                 break;
//             case "backward":
//                 offset.z = speed * delta;
//                 break;
//             case "left":
//                 offset.x = -speed * delta;
//                 break;
//             case "right":
//                 offset.x = speed * delta;
//                 break;
//         }

//         // Move the group in the direction of the offset
//         // @ts-ignore
//         group!.current!.position.add(offset);
//     });

//     return <>{children}</>;
// };
