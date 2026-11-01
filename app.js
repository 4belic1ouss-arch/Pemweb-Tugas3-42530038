
const express = require('express');
const path = require('path');
require('dotenv').config();

const db = require('./config/database');
const bukuRoutes = require('./routes/buku.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk membaca data formulir
app.use(express.urlencoded({ extended: true }));

// Mengakses file statis seperti CSS
app.use(express.static(path.join(__dirname, 'public')));

// Mengatur EJS sebagai template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Menggunakan routes buku
app.use('/', bukuRoutes);

// Halaman utama diarahkan ke daftar buku
app.get('/', (req, res) => {
    res.redirect('/buku');
});

// Mengecek koneksi database sebelum menjalankan server
db.query('SELECT 1 AS hasil')
    .then(() => {
        console.log('[DATABASE] Berhasil terhubung ke MySQL.');

        app.listen(PORT, () => {
            console.log(`[SERVER] Aktif di http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('[DATABASE ERROR]:', error.message);
    });
