
const Buku = require('../models/buku.model');

// Menampilkan daftar buku
exports.getDaftarBuku = async (req, res) => {
    try {
        const daftarBuku = await Buku.getAll();

        res.render('pages/buku-list', {
            daftarBuku,
            pesanError: null
        });
    } catch (error) {
        console.error('[ERROR DAFTAR BUKU]:', error.message);

        res.status(500).send('Gagal menampilkan daftar buku.');
    }
};

// Menampilkan formulir tambah buku
exports.getFormTambah = (req, res) => {
    res.render('pages/buku-form-tambah', {
        pesanError: null,
        data: {}
    });
};

// Memproses penambahan buku
exports.postTambah = async (req, res) => {
    try {
        const {
            kode_buku,
            judul_buku,
            penulis,
            kategori,
            deskripsi,
            harga,
            tanggal_terbit,
            status
        } = req.body;

        if (
            !kode_buku?.trim() ||
            !judul_buku?.trim() ||
            !penulis?.trim() ||
            !kategori?.trim() ||
            !harga ||
            !status
        ) {
            return res.status(400).render(
                'pages/buku-form-tambah',
                {
                    pesanError: 'Semua field wajib diisi kecuali deskripsi dan tanggal terbit.',
                    data: req.body
                }
            );
        }

        if (!Number.isFinite(Number(harga)) || Number(harga) <= 0) {
            return res.status(400).render(
                'pages/buku-form-tambah',
                {
                    pesanError: 'Harga harus berupa angka lebih dari 0.',
                    data: req.body
                }
            );
        }

        const tanggalValid =
            tanggal_terbit === '' ? null : tanggal_terbit;

        await Buku.create({
            kode_buku,
            judul_buku,
            penulis,
            kategori,
            deskripsi,
            harga,
            tanggal_terbit: tanggalValid,
            status
        });

        res.redirect('/buku');
    } catch (error) {
        console.error('[ERROR TAMBAH BUKU]:', error.message);

        let pesanError = 'Gagal menambahkan buku.';

        if (error.code === 'ER_DUP_ENTRY') {
            pesanError = 'Kode buku sudah digunakan.';
        }

        res.status(400).render('pages/buku-form-tambah', {
            pesanError,
            data: req.body
        });
    }
};

// Menampilkan formulir edit dengan data awal
exports.getFormEdit = async (req, res) => {
    try {
        const id = req.params.id;
        const buku = await Buku.getById(id);

        if (!buku) {
            return res.status(404).send('Data buku tidak ditemukan.');
        }

        res.render('pages/buku-form-edit', {
            buku,
            pesanError: null
        });
    } catch (error) {
        console.error('[ERROR FORM EDIT]:', error.message);

        res.status(500).send('Gagal membuka formulir edit.');
    }
};

// Memproses perubahan buku
exports.postUpdate = async (req, res) => {
    try {
        const id = req.params.id;

        const {
            kode_buku,
            judul_buku,
            penulis,
            kategori,
            deskripsi,
            harga,
            tanggal_terbit,
            status
        } = req.body;

        if (
            !kode_buku?.trim() ||
            !judul_buku?.trim() ||
            !penulis?.trim() ||
            !kategori?.trim() ||
            !harga ||
            !status
        ) {
            const buku = {
                id_buku: id,
                ...req.body
            };

            return res.status(400).render(
                'pages/buku-form-edit',
                {
                    buku,
                    pesanError: 'Semua field wajib diisi kecuali deskripsi dan tanggal terbit.'
                }
            );
        }

        if (!Number.isFinite(Number(harga)) || Number(harga) <= 0) {
            const buku = {
                id_buku: id,
                ...req.body
            };

            return res.status(400).render(
                'pages/buku-form-edit',
                {
                    buku,
                    pesanError: 'Harga harus berupa angka lebih dari 0.'
                }
            );
        }

        const tanggalValid =
            tanggal_terbit === '' ? null : tanggal_terbit;

        const result = await Buku.update(id, {
            kode_buku,
            judul_buku,
            penulis,
            kategori,
            deskripsi,
            harga,
            tanggal_terbit: tanggalValid,
            status
        });

        if (result.affectedRows === 0) {
            return res.status(404).send('Data buku tidak ditemukan.');
        }

        res.redirect('/buku');
    } catch (error) {
        console.error('[ERROR UPDATE BUKU]:', error.message);

        let pesanError = 'Gagal memperbarui data buku.';

        if (error.code === 'ER_DUP_ENTRY') {
            pesanError = 'Kode buku sudah digunakan.';
        }

        const buku = {
            id_buku: req.params.id,
            ...req.body
        };

        res.status(400).render('pages/buku-form-edit', {
            buku,
            pesanError
        });
    }
};

// Menghapus buku
exports.postHapus = async (req, res) => {
    try {
        const id = req.params.id;

        const result = await Buku.deleteBuku(id);

        if (result.affectedRows === 0) {
            return res.status(404).send('Data buku tidak ditemukan.');
        }

        res.redirect('/buku');
    } catch (error) {
        console.error('[ERROR HAPUS BUKU]:', error.message);

        res.status(500).send('Gagal menghapus data buku.');
    }
};
