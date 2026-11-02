# Master Data Buku Perpustakaan
Aplikasi berbasis web untuk mengelola data koleksi buku perpustakaan menggunakan Node.js, Express.js, EJS, dan MySQL.

## Deskripsi Project
Master Data Buku Perpustakaan merupakan aplikasi pengelolaan data buku yang dibuat untuk memenuhi tugas Pemrograman Web.

Aplikasi ini menerapkan konsep Model-View-Controller (MVC) dan Prepared Statements untuk mengelola data buku secara lebih terstruktur dan aman.

## Fitur Aplikas
- Menampilkan seluruh data buku.
- Menambahkan data buku baru.
- Mengedit data buku berdasarkan ID.
- Menghapus data buku dengan konfirmasi.
- Validasi input formulir.
- Menampilkan harga dalam format Rupiah.
- Menampilkan tanggal terbit buku.
- Menggunakan Prepared Statements untuk query dinamis.

## Teknologi yang Digunakan
- Node.js
- Express.js
- EJS
- MySQL
- MySQL2
- dotenv
- HTML
- CSS

## Struktur Folder
```text
perpustakaan-digital-42530038/
├── config/
│   └── database.js
├── controllers/
│   └── buku.controller.js
├── models/
│   └── buku.model.js
├── routes/
│   └── buku.routes.js
├── views/
│   └── pages/
│       ├── buku-list.ejs
│       ├── buku-form-tambah.ejs
│       └── buku-form-edit.ejs
├── public/
│   └── css/
│       └── style.css
├── .env.example
├── .gitignore
├── app.js
├── package.json
└── package-lock.json
```

## Struktur Databas
Nama database: `db_perpustakaan`
Nama tabel: `buku`
Kolom tabel:

| Kolom | Tipe Data |
|---|---|
| id_buku | INT AUTO_INCREMENT PRIMARY KEY |
| kode_buku | VARCHAR(20) |
| judul_buku | VARCHAR(150) |
| penulis | VARCHAR(100) |
| kategori | VARCHAR(50) |
| deskripsi | TEXT |
| harga | DECIMAL(10,2) |
| tanggal_terbit | DATE |
| status | ENUM |

## Cara Menjalankan Project

### 1. Clone atau download project

### 2. Install dependencies
```bash
npm install
```

### 3. Buat database MySQL
Buat database dengan nama:

```sql
CREATE DATABASE db_perpustakaan;
```

Buat tabel `buku` sesuai struktur database pada project.

### 4. Konfigurasi file .en
Salin `.env.example` menjadi `.env`, kemudian sesuaikan konfigurasi database:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=db_perpustakaan
DB_PORT=3306
```

### 5. Jalankan aplikas
```bash
npm run dev
```

### 6. Buka aplikasi
Akses alamat berikut melalui browser:
http://localhost:3000/buku

## Penerapan MVC
- Model: Mengelola query dan komunikasi dengan database.
- View: Menampilkan halaman menggunakan EJS.
- Controller: Mengatur alur data dan proses CRUD.
- Routes: Mengatur alamat dan metode HTTP.

## Keamanan Database
Aplikasi menggunakan Prepared Statements dengan placeholder `?` pada query yang menerima input dinamis untuk membantu mencegah SQL Injection.

File `.env` tidak disertakan dalam repository karena berisi konfigurasi pribadi database.

## File Skema Basis Data

File skema basis data tersedia di root repository dengan nama `database.sql`.

[Klik di sini untuk melihat database.sql](https://github.com/4belic1ouss-arch/Pemweb-Tugas3-42530038/blob/main/database.sql)