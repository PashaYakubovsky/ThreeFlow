import "./style.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = React.lazy(() => import("./pages/home/home.tsx"));
const Example = React.lazy(() => import("./pages/example/example.tsx"));
const ExampleGLTF = React.lazy(() => import("./pages/example/exampleGLTF.tsx"));

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/all";
import { CSSPlugin } from "gsap/CSSPlugin";
import Atmos from "./pages/atmos/atmos.tsx";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/example",
        element: <Example />,
    },
    {
        path: "/exampleGLTF",
        element: <ExampleGLTF />,
    },
    {
        path: "/atmos",
        element: <Atmos />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
