     // Array berisi berita terkini
        const beritaTerkini= [
            "UJI PENGUMUMAN HASIL PERPINDAHAN PESERTA DIDIK SEMESTER GANJIL TAHUN PELAJARAN 2023-2024|https://sman103jakarta.sch.id/detailpost/pengumuman-hasil-test-perpindahan-peserta-didik-semester-ganjil-tahun-pelajaran-2023-2024",
            "Pengumuman Kelulusan Mutasi Tahap 2|https://sman103jakarta.sch.id/detailpost/pengumuman-kelulusan-mutasi-tahap-2",
            "Perpindahan Peserta Didik Baru Semester Ganjil Tahun Pelajaran 2024/2025|https://sman103jakarta.sch.id/detailpost/perpindahan-peserta-didik-baru-semester-ganjil-tahun-pelajaran-2024-2025",
            "INFORMASI AGENDA PENGARAHAN TEST PERPINDAHAN PESERTA DIDIK|https://sman103jakarta.sch.id/detailpost/informasi-agenda-pengarahan-test-perpindahan-peserta-didik",
            "Upacara memperingati hari Sumpah Pemuda ke - 95|https://sman103jakarta.sch.id/detailpost/upacara-memperingati-hari-sumpah-pemuda-ke-95",
            "KEGIATAN APEL TAMU PENEGAK 2023|https://sman103jakarta.sch.id/detailpost/kegiatan-apel-tamu-penegak-2023"
        ];
        
    // Mengambil semua elemen dengan kelas 'berita'
        const beritaterkini = document.querySelectorAll('.berita');

    // Mengubah setiap elemen dengan judul baru dari array
         beritaTerkini.forEach((elem, index) => {
     // Memisahkan judul dan link
     const [judul, link] = beritaTerkini[index].split("|");
     // Mengubah isi elemen menjadi tautan
     elem.innerHTML = `<a href="${link}" target="_blank">${judul}</a>`;
    });
       