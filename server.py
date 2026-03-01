# --- SERVER.PY: SI MANDOR GALAK ---
from flask import Flask, jsonify, request

app = Flask(__name__)

# Data Pemain yang sudah masuk lobby
pemain_siap = []

@app.route('/gabung', methods=['POST'])
def gabung_lobby():
    data = request.json
    nama = data.get('nama')
    
    if len(pemain_siap) < 6:
        pemain_siap.append(nama)
        return jsonify({"status": "Antre", "pesan": f"{nama} sudah di lobby!"})
    else:
        return jsonify({"status": "Penuh", "pesan": "Maaf, meja sudah 6 orang!"})

@app.route('/cek-mulai', methods=['GET'])
def cek_mulai():
    # LOGIKA MANDOR: Teriak kalau sudah 6 orang tapi belum mulai
    if len(pemain_siap) == 6:
        return jsonify({"aksi": "MULAI", "pesan": "WOI KERJA! 6 orang sudah siap!"})
    else:
        sisa = 6 - len(pemain_siap)
        return jsonify({"aksi": "TUNGGU", "pesan": f"Sabar, kurang {sisa} orang lagi!"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
  
