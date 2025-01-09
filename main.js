import * as threejs from 'three'

const scene = new threejs.Scene()
const camera = new threejs.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
const renderer = new threejs.WebGLRenderer({
  canvas: document.querySelector('#background')
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30)
renderer.render(scene, camera)

const geometry = new threejs.IcosahedronGeometry(7, 0)
const material = new threejs.MeshBasicMaterial({
  color: 0x7010c7,
  vertexColors: true,
})
const torus = new threejs.Mesh(geometry, material)

scene.add(torus)

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

animate()