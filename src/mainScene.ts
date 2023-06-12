import { gsap } from "gsap";
import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

if (window.location.pathname === "/") {
    // import * as dat from "dat.gui";
    // import { OrbitControls as OrbitControlsType } from "./../types/three-ts-types/types/three/examples/jsm/controls/OrbitControls.d";
    // import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
    // import { PlainAnimator } from "three-plain-animator";

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#app") as HTMLCanvasElement,
    });
    let scroll: number, scrollCaption: number;
    // const raycaster = new THREE.Raycaster();
    // const pointer = new THREE.Vector2();
    // const animationTimeline = gsap.timeline();
    // let animator: PlainAnimator;
    // Add a grid helper to the scene
    // const gui = new dat.GUI();
    init();

    if (WebGL.isWebGLAvailable()) {
        // Initiate function or other initializations here
        animate();
    } else {
        setAWarnMessage();
    }
    function setAWarnMessage() {
        const warning = WebGL.getWebGLErrorMessage();

        const rootElem = document.getElementById("root");
        warning.style.position = "fixed";
        warning.style.left = "50%";
        warning.style.top = "50%";
        warning.style.transform = "translate(-50%, -50%)";
        warning.style.zIndex = "100";
        if (rootElem) {
            document.body.appendChild(warning);
        } else {
            setTimeout(setAWarnMessage, 5000);
        }
    }

    function init() {
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(30);
        camera.position.setX(20);
        camera.position.setY(20);

        // const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
        // const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
        // const torus = new THREE.Mesh(geometry, material);

        // scene.add(torus);

        const pointLight = new THREE.PointLight(0xffffff, 1, 100);
        pointLight.position.set(0, 0, 10);

        const ambientLight = new THREE.AmbientLight(0xffffff);

        scene.add(pointLight, ambientLight);

        // Debug
        // const lightHelper = new THREE.PointLightHelper(pointLight);
        // scene.add(lightHelper);

        // Debug
        // const gridHelper = new THREE.GridHelper(200, 50);
        // scene.add(gridHelper);

        // Debug
        // gui.add(torus.position, "x").min(-10).max(100).step(0.01);
        // gui.add(torus.position, "y").min(-10).max(100).step(0.01);
        // gui.add(torus.position, "z").min(-100).max(100).step(0.01);

        // Add controls
        // const controls = new OrbitControls(camera, renderer.domElement);
        function addStar() {
            const geometry = new THREE.SphereGeometry(0.1, 24, 24);
            const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
            const star = new THREE.Mesh(geometry, material);

            const [x, y, z] = Array(3)
                .fill(0)
                .map(() => THREE.MathUtils.randFloatSpread(400));

            star.position.set(x, y, z);
            scene.add(star);

            return star; // Return the star object for later use
        }

        const stars = Array(500).fill(0).map(addStar); // Create an array to store all the star objects

        const clock = new THREE.Clock();

        function animateStar() {
            const elapsedTime = clock.getElapsedTime();

            // Update the position or any other properties of the stars based on the elapsed time
            stars.forEach(star => {
                // star.position.y += Math.sin(elapsedTime * 2) * 0.1; // Example animation: move stars up and down
                // star.position.x += Math.sin(elapsedTime * 2) * 0.1; // Example animation: move stars up and down
                star.position.z += Math.sin(elapsedTime * 2) * 0.1; // Example animation: move stars up and down
                star.scale.add(
                    new THREE.Vector3(1, 1, 1).multiplyScalar(Math.sin(elapsedTime * 2) * 0.1)
                ); // Example animation: scale stars up and down
            });

            renderer.render(scene, camera);

            requestAnimationFrame(animateStar);
        }

        animateStar();

        const spaceTexture = new THREE.TextureLoader().load("/img/space2.jpg");
        scene.background = spaceTexture;

        const rickRollMesh = createRickRollMesh("/aKaOqIh.gif");
        scene.add(rickRollMesh);

        // Position the cube
        rickRollMesh.position.z = -5;

        // Set up keyboard controls
        const keyboard: Record<string, boolean> = {};
        document.addEventListener("keydown", function (event) {
            keyboard[event.code] = true;
        });
        document.addEventListener("keyup", function (event) {
            keyboard[event.code] = false;
        });

        // Animation loop
        function animateRickRollCube() {
            requestAnimationFrame(animateRickRollCube);

            // Move the cube based on keyboard arrow keys
            if (keyboard["ArrowUp"]) rickRollMesh.position.y += 0.1;
            if (keyboard["ArrowDown"]) rickRollMesh.position.y -= 0.1;
            if (keyboard["ArrowLeft"]) rickRollMesh.position.x -= 0.1;
            if (keyboard["ArrowRight"]) rickRollMesh.position.x += 0.1;

            renderer.render(scene, camera);
        }

        // Start the animation loop
        animateRickRollCube();

        // Debug
        // gui.add(mesh.position, "x").min(-10).max(100).step(0.01).name("Rick Roll X");
        // gui.add(mesh.position, "y").min(-10).max(100).step(0.01).name("Rick Roll Y");
        // gui.add(mesh.position, "z").min(-100).max(100).step(0.01).name("Rick Roll Z");
        // scene.add(rickRoll);

        // create a mesh with an animated texture
        function createRickRollMesh(texturePath: string) {
            const texture = new THREE.TextureLoader().load(texturePath);
            // animator = new PlainAnimator(texture, 1, 1, 10, 10);

            const geometry = new THREE.BoxGeometry(5, 5, 5);
            // const _texture = animator.init();
            const material = new THREE.MeshBasicMaterial({
                map: texture,
                transparent: true,
            });
            let mesh = new THREE.Mesh(geometry, material);
            return mesh;
        }

        // Moon
        const moonTexture = new THREE.TextureLoader().load("/img/moon.jpg");
        const moonNormalTexture = new THREE.TextureLoader().load("/img/normal.jpg");

        const moon = new THREE.Mesh(
            new THREE.SphereGeometry(12, 32, 32),
            new THREE.MeshPhongMaterial({
                map: moonTexture,
                normalMap: moonNormalTexture,
                color: 0xffffff, // set the color of the mesh
                specular: 0x555555, // set the specular color of the mesh
                shininess: 30, // set the shininess of the mesh
            })
        );

        moon.castShadow = true;
        moon.position.z = 0;
        moon.position.x = 0;
        moon.position.y = 0;
        scene.add(moon);

        // Debug
        // gui.add(moon.position, "x").min(-10).max(100).step(0.01).name("Moon X");
        // gui.add(moon.position, "y").min(-10).max(100).step(0.01).name("Moon Y");
        // gui.add(moon.position, "z").min(-100).max(100).step(0.01).name("Moon Z");

        function moveCamera() {
            const rect = document.body.getBoundingClientRect();
            const t = rect.top;

            if (rect) {
                // get scroll position in decimal and set into variable and html attribute
                scroll = Math.abs(rect.top / rect.height);
                scrollCaption = +scroll.toFixed(2);

                console.log(rect.height);

                const barElem = document.querySelector("#scrollProgressBar") as HTMLSpanElement;
                barElem.style.width = `${scroll * 100}%`;
                barElem.setAttribute("scroll-progress", `${scrollCaption * 100}`);
            }

            gsap.to(moon.position, {
                x: (moon.position.x + t) * -0.002,
                y: (moon.position.y + t) * -0.002,
                z: (moon.position.z + t) / 4,
                duration: 0.005,
                ease: "Power2.easeInOut",
            });

            gsap.to(moon.rotation, {
                x: moon.rotation.x + 0.01,
                y: moon.rotation.y + 0.1,
                z: moon.rotation.z + 0.01,
                duration: 0.005,
                ease: "Quart.easeOut",
            });

            // gsap.to(camera.position, {
            //     x: scrollCaption / 5,
            //     y: scrollCaption,
            //     z: t * -0.02,
            //     duration: 0.5,
            // });

            gsap.to(rickRollMesh.position, {
                x: (rickRollMesh.position.x + t) * -0.002,
                z: (rickRollMesh.position.z + t) * -0.0002,
                duration: 0.05,
                ease: "easeOut",
            });

            gsap.to(rickRollMesh.rotation, {
                y: (rickRollMesh.rotation.y + t) * -0.002,
                duration: 0.05,
                ease: "easeOut",
            });

            gsap.to(stars, {
                x: (stars[0].position.x + t) * -0.002,
            });

            // rickRollMesh.position.x = t * -0.02;
            // rickRollMesh.position.y = t * -0.002;
        }

        document.body.onscroll = moveCamera;
    }

    // animate function
    function animate() {
        requestAnimationFrame(animate);

        renderer.render(scene, camera);
    }
}
