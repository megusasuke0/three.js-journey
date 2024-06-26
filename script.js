import * as THREE from 'three';

// canvasを取得
const canvas = document.querySelector('canvas.webgl');

// canvasのサイズを決める
const sizes = {
  width: 800,
  height: 600
}

//①Sceneを追加
const scene = new THREE.Scene()

//②objectを追加
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//③カメラを追加
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3
scene.add(camera);

//④Rendererを追加
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);