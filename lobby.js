// --- LOBBY.JS: SISTEM PENGACAK & GERBANG UTAMA ---

// 1. FUNGSI PENGACAK KHUSUS (CRYPTO API)
// Ini adalah sistem yang didesain khusus untuk keamanan angka acak
function generateKodeUnik() {
    const arrayAcak = new Uint32Array(1);
    window.crypto.getRandomValues(arrayAcak); // Mengambil nilai acak dari sinyal mesin HP
    
    // Mengubah angka raksasa menjadi 4 karakter unik (Huruf & Angka)
    const kodeFinal = arrayAcak[0].toString(36).substring(0, 4).toUpperCase();
    
    // Menampilkan kode di layar Lobby Tunggu
    const slotKode = document.getElementById('kode-tunggu');
    if(slotKode) {
        slotKode.innerText = "KODE MABAR: " + kodeFinal;
        slotKode.style.textShadow = "0 0 10px #8ab4f8";
    }
    
    console.log("Kode Berhasil Diacak: " + kodeFinal);
    return kodeFinal;
}

// 2. FUNGSI PINDAH RUANGAN (LOGIKA DUA OPSI)
// Memisahkan jalur antara Mabar 3D dan Ruang Keluarga

function keArenaMabar() {
    // Sembunyikan Lobby, Munculkan Arena 3D Pistol
    document.getElementById('lobby-tunggu').style.display = 'none';
    document.getElementById('arena-3d').style.display = 'block';
    
    // Mulai inisialisasi sinyal PeerJS untuk mabar
    if(typeof inisialisasiMabar === 'function') {
        inisialisasiMabar(); 
    }
}

function keRuangKeluarga() {
    // Sembunyikan Lobby, Munculkan Ruangan Keluarga
    document.getElementById('lobby-tunggu').style.display = 'none';
    document.getElementById('ruang-keluarga').style.display = 'block';
    
    console.log("Masuk ke Mode Santai Keluarga.");
}
