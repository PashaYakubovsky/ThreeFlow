import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

import style from "./atmos.module.scss";
import AtmosScene from "./atmosScene";
import { ScrollControls } from "@react-three/drei";
import useAtmosStore from "../../stores/atmosStore";
import { Triangle } from "react-loader-spinner";
import { Perf } from "r3f-perf";
import { useGetQueryValues } from "../../hooks/useGetQueryValues";
import useAppStore from "../../stores/appStore";

const Atmos = () => {
    useGetQueryValues();
    const isLoading = useAtmosStore(state => state.isLoading);
    const debug = useAppStore(state => state.debug);

    return (
        <div className={style.atmos}>
            {isLoading ? (
                <Triangle
                    height="80vh"
                    width="80vw"
                    color="#fff"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass={style.spinner}
                    visible={true}
                />
            ) : null}
            <Suspense
                fallback={
                    <Triangle
                        height="80vh"
                        width="80vw"
                        color="#fff"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        wrapperClass={style.spinner}
                        visible={true}
                    />
                }>
                <Canvas
                    gl={{
                        powerPreference: "high-performance",
                        preserveDrawingBuffer: true,
                        stencil: true,
                        alpha: false,
                    }}>
                    <color attach="background" args={["#ececec"]} />

                    <ScrollControls pages={3} damping={1}>
                        <AtmosScene />
                    </ScrollControls>

                    {debug ? <Perf position="top-left" /> : null}
                </Canvas>
            </Suspense>
        </div>
    );
};

export default Atmos;
