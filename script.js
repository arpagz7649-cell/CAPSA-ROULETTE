// 1. SIAPKAN "PENGANGKUT" GAMBAR (GLTFLoader)
const loader = new THREE.GLTFLoader();

// 2. PANGGIL FILE GAMBAR 3D KAMU
loader.load(
    'pistol.glb', // <--- Ganti dengan nama file gambar 3D kamu di GitHub
    function (gltf) {
        const pistol3D = gltf.scene;
        
        // Atur ukuran pistolnya biar pas di layar
        pistol3D.scale.set(0.5, 0.5, 0.5); 
        
        // Masukkan ke dalam dunia game
        scene.add(pistol3D);
        
        console.log("Gambar Pistol 3D Berhasil Muncul!");
    },
    undefined,
    function (error) {
        console.error("Gagal memuat gambar 3D:", error);
    }
);

