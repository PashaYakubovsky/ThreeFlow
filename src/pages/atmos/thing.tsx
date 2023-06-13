import { GroupProps, useFrame } from "@react-three/fiber";
import React, { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";
import CustomShaderMaterial from "three-custom-shader-material";
// @ts-ignore
import { IcosahedronBufferGeometry, PointsMaterial } from "three";
// @ts-ignore
import { patchShaders } from "gl-noise";
// @ts-ignore
import { patchShaders } from "gl-noise/build/glNoise.m";

const shader = {
    vertex: /* glsl */ `
      uniform float uTime;
      varying float vVisibility;
      varying vec3 vViewNormal;

      void main() {
        vec3 n = gln_curl(position + uTime * 0.5);

        vec3 _viewNormal = normalMatrix * normal;
        vViewNormal = _viewNormal;
        vec4 _mvPosition = modelViewMatrix * vec4(position, 1.);

        float visibility = step(-0.05, dot(-normalize(_mvPosition.xyz), normalize(_viewNormal)));
        vVisibility = visibility;

        csm_Position = position + (normal * n * 0.5);
        csm_PointSize += ((1. - visibility) * 0.05);
      }
      `,
    fragment: /* glsl */ `
      varying float vVisibility;
      varying vec3 vViewNormal;

      void main() {

        
      }
      `,
};

const Thing = (props: GroupProps) => {
    const pointsRef =
        useRef<
            THREE.Points<
                THREE.BufferGeometry<THREE.NormalBufferAttributes>,
                THREE.Material | THREE.Material[]
            >
        >(null);
    const matRef = useRef<any>();

    useEffect(() => {
        pointsRef.current!.geometry = new IcosahedronBufferGeometry(1, 32);
    }, []);

    useFrame(({ clock }) => {
        matRef.current!.uniforms.uTime.value = clock.elapsedTime;
    });

    const uniforms = useMemo(
        () => ({
            uTime: {
                value: 0,
            },
        }),
        []
    );

    return (
        <group {...props}>
            <points ref={pointsRef}>
                <CustomShaderMaterial
                    ref={matRef}
                    baseMaterial={THREE.PointsMaterial}
                    size={0.2}
                    vertexShader={patchShaders(shader.vertex) as string}
                    fragmentShader={patchShaders(shader.fragment) as string}
                    uniforms={uniforms}
                    transparent
                />
            </points>
        </group>
    );
};

export default Thing;
