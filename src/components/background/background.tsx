import React from "react";
import { LayerMaterial, Gradient } from "lamina";
import { Sphere, Environment } from "@react-three/drei";
import * as THREE from "three";

const Background = () => {
    return (
        <>
            <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2}>
                <LayerMaterial transmission={1} lighting="physical" side={THREE.BackSide}>
                    <Gradient
                        colorA="rgba(15,2,2,1)"
                        colorB="rgba(36,163,190,1)"
                        axes="y"
                        start={0}
                        end={-0.5}
                    />
                </LayerMaterial>
            </Sphere>
            <Environment preset="sunset" />
        </>
    );
};

export default Background;
