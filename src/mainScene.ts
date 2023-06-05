import * as THREE from "three";
// import * as dat from "dat.gui";
// import { OrbitControls as OrbitControlsType } from "./../types/three-ts-types/types/three/examples/jsm/controls/OrbitControls.d";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PlainAnimator } from "three-plain-animator";

/* 
1. Create a scene
2. Create a camera
3. Create a renderer
4. Create a mesh
5. Add mesh to scene
6. Add light to scene
7. Render the scene and camera
*/

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let animator: PlainAnimator;
// Add a grid helper to the scene
// const gui = new dat.GUI();

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#app") as HTMLCanvasElement,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material);

// scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper);

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
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3)
        .fill(0)
        .map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
}

Array(500).fill(0).forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load("/space2.jpg");
scene.background = spaceTexture;

const rickRollMesh = createAnimatedMesh("/aKaOqIh.gif");
scene.add(rickRollMesh);

// Debug
// gui.add(mesh.position, "x").min(-10).max(100).step(0.01).name("Rick Roll X");
// gui.add(mesh.position, "y").min(-10).max(100).step(0.01).name("Rick Roll Y");
// gui.add(mesh.position, "z").min(-100).max(100).step(0.01).name("Rick Roll Z");
// scene.add(rickRoll);

// animate function
function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    // controls.update();
    // update the animation Rick Roll
    animator.animate();

    renderer.render(scene, camera);
}
// create a mesh with an animated texture
function createAnimatedMesh(texturePath: string) {
    const texture = new THREE.TextureLoader().load(texturePath);
    animator = new PlainAnimator(texture, 1, 1, 10, 10);

    const geometry = new THREE.BoxGeometry(5, 5, 5);
    const _texture = animator.init();
    const material = new THREE.MeshBasicMaterial({
        map: _texture,
        transparent: true,
    });
    let mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(10, 0, 0);
    return mesh;
}

// Moon
const moonTexture = new THREE.TextureLoader().load("/moon.jpg");
const moonNormalTexture = new THREE.TextureLoader().load("/normal.jpg");

const moon = new THREE.Mesh(
    new THREE.SphereGeometry(12, 32, 32),
    new THREE.MeshStandardMaterial({ map: moonTexture, normalMap: moonNormalTexture })
);
moon.castShadow = true;
moon.position.z = -100;
moon.position.x = 50;
moon.position.y = 50;
scene.add(moon);

// Debug
// gui.add(moon.position, "x").min(-10).max(100).step(0.01).name("Moon X");
// gui.add(moon.position, "y").min(-10).max(100).step(0.01).name("Moon Y");
// gui.add(moon.position, "z").min(-100).max(100).step(0.01).name("Moon Z");

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;

    moon.rotation.x += 0.5;
    moon.rotation.y += 0.075;
    moon.rotation.z += 0.05;
    moon.position.z = t / 4;
    moon.position.y = t * -0.002;
    moon.position.x = t * -0.002;

    camera.position.z = t * -0.02;
    camera.position.x = t * -0.002;
    camera.position.y = t * -0.0002;

    rickRollMesh.rotation.y += 0.01;
    rickRollMesh.rotation.z += 0.01;
}

document.body.onscroll = moveCamera;

animate();
