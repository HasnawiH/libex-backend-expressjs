-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 14 Nov 2019 pada 20.12
-- Versi server: 10.4.8-MariaDB
-- Versi PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `librarydb`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `book`
--

CREATE TABLE `book` (
  `id` int(10) NOT NULL,
  `title` varchar(50) NOT NULL,
  `author` varchar(30) NOT NULL,
  `desc` text NOT NULL,
  `genre` varchar(30) NOT NULL,
  `status` varchar(20) NOT NULL,
  `imgUrl` text NOT NULL,
  `created_at` varchar(50) NOT NULL,
  `updated_at` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `book`
--

INSERT INTO `book` (`id`, `title`, `author`, `desc`, `genre`, `status`, `imgUrl`, `created_at`, `updated_at`) VALUES
(12, 'Fatal Affair', 'Marie Force', 'Detektif Sersan Samantha Holland dari Metro Police, Washington D.C.', 'Novel', 'Avaliable', 'https://ssvr.bukukita.com/babacms/displaybuku/113588_f.jpg', '2019-11-11 00:00:00', '2019-11-13 17:45:07.508'),
(14, 'Pengkhianatan', 'V. E. Schwab', 'PERSETERUAN (Vicious) Victor dan Eli berteman saat kuliah―anak-anak pintar, arogan, dan kesepian yang sama-sama cerdas dan ambisius.', 'Novel', 'Not Available', 'https://ssvr.bukukita.com/babacms/displaybuku/111368_f.jpg', '2019-11-10 18:15:32.323', '2019-11-13 17:49:17.516'),
(15, 'After', 'Anna Todd', 'Tessa adalah gadis manis, tahu apa yang dia cita-citakan, memiliki ambisi, pacar baik hati, serta ibu yang selalu mengarahkan kehidupannya.', 'Novel', 'Avaliable', 'https://ssvr.bukukita.com/babacms/displaybuku/112272_f.jpg', '2019-11-10 18:18:43.869', '2019-11-13 17:51:02.190'),
(16, 'Hadis Tarbawi', 'Hasbiyallah', 'Untuk mencapai keberhasilan dalam dunia pendidikan, tentunya banyak fase dan proses yang harus dilalui lebih dulu oleh para pelaku pendidikan', 'Pembelajaran', 'Avaliable', 'https://ssvr.bukukita.com/babacms/displaybuku/96848_f.jpg', '2019-11-10 18:20:50.423', '2019-11-13 17:55:03.972'),
(17, 'Anak Semua Bangsa', 'Pramoedya Ananta Toer', 'Kehadiran roman sejarah ini, bukan saja dimaksudkan untuk mengisi sebuah episode berbangsa yang berada di titik persalinan yang pelik dan menentukan', 'History', 'Avaliable', 'https://ssvr.bukukita.com/babacms/displaybuku/98757_f.jpg', '2019-11-10 18:22:05.026', '2019-11-13 17:57:07.917'),
(18, 'Neuro Leadership', 'Roy T. Amboro', 'Bravo Pak Roy, ini adalah buku yang sungguh dinantikan masyarakat dan bermanfaat untuk mengasah leadership bangsa, yakni dengan mengoptimalkan fungsi dan kapasitas otak manusia yang kaitannya erat dengan era 4.0 yang augmentative dan intelligence.', 'Psikologi', 'Not Avaliable', 'https://ssvr.bukukita.com/babacms/displaybuku/108600_f.jpg', '2019-11-10 18:26:51.961', '2019-11-13 17:59:49.877'),
(19, 'Otoritas (Authority)', 'Jeff Vandermeer', 'Tiga puluh tahun, serangkaian ekspedisi mulai menjelajahi Area X, bentang alam luas yang dikitari perbatasan tak terlihat dan secara misterius menghapus semua tanda peradaban.', 'Novel', 'Not Avaliable', 'https://ssvr.bukukita.com/babacms/displaybuku/112339_f.jpg', '2019-11-10 19:45:59.952', '2019-11-10 19:45:59.952'),
(20, 'Tak Bersalah', 'Jeff Vandermeer', 'Pembunuhan dan Ketidakadilan di Sebuah Kota Kecil Dalam perekrutan liga besar bisbol pada 1971, Ron Wiliamson pemain yang pertama terpilih dari Negara Bagian Oklahoma.', 'Novel', 'Avaliable', 'https://ssvr.bukukita.com/babacms/displaybuku/111373_f.jpg', '2019-11-10 19:48:48.908', '2019-11-10 19:48:48.908'),
(21, 'Kembali Utuh', 'Neal Shusterman', 'Warga Proaktif, perusahaan yang menciptakan Cam dari bagian-bagian tubuh para remaja yang mengalami pemisahan raga, punya rencana militer baginya.', 'Novel', 'Avaliable', 'https://ssvr.bukukita.com/babacms/displaybuku/111796_f.jpg', '2019-11-10 19:52:14.750', '2019-11-10 19:52:14.750');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `book`
--
ALTER TABLE `book`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
