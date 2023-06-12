import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
// import Floor from "../../components/floor";
import useAppStore from "../../stores/appStore";
import { useGetQueryValues } from "../../hooks/useGetQueryValues";
import style from "./example.module.scss";
import { PointerLockControls, OrbitControls, useGLTF } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Lights from "./lights";
import { Leva, useControls } from "leva";
import Env from "../../components/env";
import Model, { Models } from "./model";

const ExampleGLTF = () => {
    useGetQueryValues();
    useGLTF.preload(Models.map(({ url }) => url));

    const control = useAppStore(state => state.control);
    const debug = useAppStore(state => state.debug);

    const { title } = useControls({
        title: {
            options: Models.map(({ title }) => title),
        },
    });

    return (
        <main className={style.app}>
            <Canvas camera={{ position: [4, 4, 1.5] }} shadows>
                <Suspense fallback="loading...">
                    <Model url={Models[Models.findIndex(m => m.title === title)].url} />
                </Suspense>

                {control === "point" ? (
                    <PointerLockControls
                        onLock={() => {
                            document.body.style.cursor = "none";
                        }}
                        onUnlock={() => {
                            document.body.style.cursor = "default";
                        }}
                    />
                ) : null}

                {control === "orbit" ? <OrbitControls /> : null}

                {debug ? (
                    <Suspense fallback={null}>
                        <Perf position="bottom-left" />
                        <axesHelper args={[5]} />
                        <gridHelper args={[20, 20, 0xff0000, "teal"]} />
                    </Suspense>
                ) : null}

                <Env />

                {/* <ContactShadows scale={150} position={[0.33, -0.33, 0.33]} opacity={1.5} /> */}

                {debug ? <Lights /> : <directionalLight position={[5, 5, 5]} castShadow />}

                {/* <color attach="background" args={[color.value]} /> */}

                {/* <primitive object={gltf.scene} position={[0, 1, 0]} children-0-castShadow /> */}

                {/* <Floor /> */}
            </Canvas>

            <Leva collapsed />
        </main>
    );
};

export default ExampleGLTF;
