
const express = require('express');
const router = express.Router();

const bukuController = require('../controllers/buku.controller');

// Menampilkan daftar buku
router.get('/buku', bukuController.getDaftarBuku);

// Menampilkan formulir tambah buku
router.get('/buku/tambah', bukuController.getFormTambah);

// Memproses penambahan buku
router.post('/buku/tambah', bukuController.postTambah);

// Menampilkan formulir edit berdasarkan ID
router.get('/buku/edit/:id', bukuController.getFormEdit);

// Memproses perubahan data buku
router.post('/buku/edit/:id', bukuController.postUpdate);

// Memproses penghapusan buku
router.post('/buku/hapus/:id', bukuController.postHapus);

module.exports = router;
