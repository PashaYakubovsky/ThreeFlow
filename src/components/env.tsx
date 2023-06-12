import { Environment } from "@react-three/drei";
import React, { Suspense } from "react";

const Env = () => {
    return (
        <Suspense fallback="loading...">
            <Environment background files="/img/garden_nook_4k.exr" />
        </Suspense>
    );
};
export default Env;
