// Scene + Camera + Renderer
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer()

// Renderer settings
renderer.setSize( window.innerWidth, window.innerHeight ) 
renderer.setClearColor("#fffff") // sets renderer background color
document.body.appendChild( renderer.domElement )

// Camera settings
camera.position.z = 5;

// basic cube
let geometry = new THREE.BoxGeometry( 1, 1, 1)
let material = new THREE.MeshStandardMaterial( { color: 0xff0061 })
let cube = new THREE.Mesh ( geometry, material )
scene.add( cube )

// point light
let pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 50, 50, 50 );
scene.add( pointLight );

// animation
function animate() {
    requestAnimationFrame( animate )
    cube.rotation.y += 0.01;
    cube.rotation.x += 0.01;
    renderer.render( scene, camera )
}

animate()