import * as THREE from "three";
import { baseMesh } from "./mesh";

let camera: THREE.Camera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let material: THREE.Material;
let mesh: THREE.Mesh;

init();

function init() {
  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  );
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 20;

  scene = new THREE.Scene();

  material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

  mesh = new THREE.Mesh(baseMesh(200), material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight, true);
  renderer.setAnimationLoop(animation);
  document.body.appendChild(renderer.domElement);
}

function animation(time: number) {
  renderer.render(scene, camera);
}
