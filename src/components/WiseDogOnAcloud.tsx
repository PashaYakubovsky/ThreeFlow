import React from "react";
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

const WiseDogOnACloud = (props: GroupProps) => {
    const gltf = useGLTF("/models/WiseDogOnAcloud.glb");

    const { nodes, materials } = gltf as unknown as THREE.Group & {
        nodes: {
            "Node-Mesh": THREE.Mesh;
            "Node-Mesh_1": THREE.Mesh;
            "Node-Mesh_2": THREE.Mesh;
        };
        materials: {
            mat19: THREE.MeshStandardMaterial;
            mat21: THREE.MeshStandardMaterial;
            mat23: THREE.MeshStandardMaterial;
        };
    };
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes["Node-Mesh"].geometry} material={materials.mat19} />
            <mesh geometry={nodes["Node-Mesh_1"].geometry} material={materials.mat21} />
            <mesh geometry={nodes["Node-Mesh_2"].geometry} material={materials.mat23} />
        </group>
    );
};

export default WiseDogOnACloud;

useGLTF.preload("/models/WiseDogOnAcloud.glb");
