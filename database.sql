
-- ==========================================
-- DATABASE: SISTEM PERPUSTAKAAN DIGITAL
-- ==========================================

CREATE DATABASE IF NOT EXISTS db_perpustakaan;

USE db_perpustakaan;

-- ==========================================
-- TABEL BUKU
-- ==========================================

CREATE TABLE IF NOT EXISTS buku (
    id_buku INT AUTO_INCREMENT PRIMARY KEY,
    kode_buku VARCHAR(20) NOT NULL UNIQUE,
    judul_buku VARCHAR(150) NOT NULL,
    penulis VARCHAR(100) NOT NULL,
    kategori VARCHAR(50) NOT NULL,
    deskripsi TEXT,
    harga DECIMAL(10,2) NOT NULL,
    tanggal_terbit DATE,
    status ENUM('Tersedia', 'Dipinjam', 'Rusak')
        NOT NULL DEFAULT 'Tersedia'
);

-- ==========================================
-- DATA AWAL BUKU
-- ==========================================

INSERT INTO buku
(kode_buku, judul_buku, penulis, kategori, deskripsi, harga, tanggal_terbit, status)
VALUES
(
    'BK001',
    'Laskar Pelangi',
    'Andrea Hirata',
    'Novel',
    'Novel yang menceritakan perjuangan anak-anak Belitung dalam memperoleh pendidikan.',
    85000,
    '2005-09-01',
    'Tersedia'
),
(
    'BK002',
    'Bumi Manusia',
    'Pramoedya Ananta Toer',
    'Sejarah',
    'Novel yang menggambarkan kehidupan masyarakat pada masa kolonial.',
    95000,
    '1980-08-01',
    'Dipinjam'
),
(
    'BK003',
    'Atomic Habits',
    'James Clear',
    'Pengembangan Diri',
    'Buku tentang membangun kebiasaan baik melalui perubahan kecil.',
    120000,
    '2018-10-16',
    'Tersedia'
);
