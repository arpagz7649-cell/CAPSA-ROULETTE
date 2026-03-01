// 1. SETUP DUNIA 3D
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5).normalize();
scene.add(light);

// 2. PANGGIL GAMBAR PISTOL 3D (.glb)
const loader = new THREE.GLTFLoader();
let pistol3D;

loader.load('pistol.glb', function(gltf) {
    pistol3D = gltf.scene;
    scene.add(pistol3D);
    pistol3D.position.set(0, 0, 0); 
}, undefined, function(e) {
    console.error("Gagal muat gambar 3D!");
});

camera.position.z = 5;

function render3D() {
    requestAnimationFrame(render3D);
    if(pistol3D) pistol3D.rotation.y += 0.01; // Pistol berputar 3D
    renderer.render(scene, camera);
}
render3D();

// 3. LOGIKA SINYAL MABAR (PEERJS)
const peer = new Peer();
let conn;

function mabar() {
    const code = document.getElementById('room-code').value;
    conn = peer.connect(code);
    setupKoneksi();
}

peer.on('connection', (c) => {
    conn = c;
    setupKoneksi();
});

function setupKoneksi() {
    conn.on('open', () => {
        document.getElementById('lobby').style.display = 'none';
        alert("SINYAL TERKUNCI! MABAR DIMULAI.");
    });
}
