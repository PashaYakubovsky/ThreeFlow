import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

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
        <>
            <group ref={ref} {...props} dispose={null}>
                <mesh geometry={nodes.Jet_Cube024_1.geometry} material={materials["455A64"]} />
                <mesh geometry={nodes.Jet_Cube024_1_1.geometry} material={materials["80DEEA"]} />
                <mesh geometry={nodes.Jet_Cube024_1_2.geometry} material={materials["1A1A1A"]} />
                <mesh geometry={nodes.Jet_Cube024_1_3.geometry} material={materials["78909C"]} />
            </group>
        </>
    );
};

export default Jet;

useGLTF.preload("/models/Jet.glb");
