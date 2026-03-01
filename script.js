// --- LOGIKA HOST & JOIN (script.js) ---

const peer = new Peer(); // Sinyal Online Aktif

// 1. LOGIKA UNTUK HOST
function buatRuangan() {
    peer.on('open', (id) => {
        // Munculkan kode di layar agar bisa dikasih ke teman
        document.getElementById('display-kode').innerText = "KODE KAMU: " + id;
        alert("Ruangan Dibuat! Berikan kode " + id + " ke temanmu.");
    });
}

// Menunggu teman masuk (Hanya untuk Host)
peer.on('connection', (c) => {
    conn = c;
    setupMabar();
});

// 2. LOGIKA UNTUK JOINER
function gabungMabar() {
    const kodeTarget = document.getElementById('room-code').value;
    if(!kodeTarget) return alert("Isi kodenya dulu!");
    
    conn = peer.connect(kodeTarget);
    setupMabar();
}

function setupMabar() {
    conn.on('open', () => {
        document.getElementById('lobby').style.display = 'none';
        alert("KONEKSI BERHASIL! Selamat Mabar Capsa Roulette.");
        // Mulai render pistol 3D di sini
    });
}
