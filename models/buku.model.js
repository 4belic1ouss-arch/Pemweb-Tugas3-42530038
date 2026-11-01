
const db = require('../config/database');

// Mengambil seluruh data buku
const getAll = async () => {
    const sql = `
        SELECT *
        FROM buku
        ORDER BY id_buku DESC
    `;

    const [rows] = await db.query(sql);
    return rows;
};

// Mengambil satu buku berdasarkan ID
const getById = async (id) => {
    const sql = `
        SELECT *
        FROM buku
        WHERE id_buku = ?
    `;

    const [rows] = await db.query(sql, [id]);
    return rows[0];
};

// Menambahkan buku baru
const create = async (data) => {
    const sql = `
        INSERT INTO buku
        (kode_buku, judul_buku, penulis, kategori,
         deskripsi, harga, tanggal_terbit, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        data.kode_buku,
        data.judul_buku,
        data.penulis,
        data.kategori,
        data.deskripsi,
        data.harga,
        data.tanggal_terbit || null,
        data.status
    ];

    const [result] = await db.query(sql, values);
    return result;
};

// Memperbarui data buku
const update = async (id, data) => {
    const sql = `
        UPDATE buku
        SET kode_buku = ?,
            judul_buku = ?,
            penulis = ?,
            kategori = ?,
            deskripsi = ?,
            harga = ?,
            tanggal_terbit = ?,
            status = ?
        WHERE id_buku = ?
    `;

    const values = [
        data.kode_buku,
        data.judul_buku,
        data.penulis,
        data.kategori,
        data.deskripsi,
        data.harga,
        data.tanggal_terbit || null,
        data.status,
        id
    ];

    const [result] = await db.query(sql, values);
    return result;
};

// Menghapus data buku
const deleteBuku = async (id) => {
    const sql = `
        DELETE FROM buku
        WHERE id_buku = ?
    `;

    const [result] = await db.query(sql, [id]);
    return result;
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteBuku
};
