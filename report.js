document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("report-accordion");

  const deskripsiHari = [
    "Hari Pertama: Resmi Dimulai!  >> Hari ini menjadi penanda dimulainya perjalanan KKN kami di Desa Harumansari. Bersama kelompok 52 dan 54, kami berkumpul di kantor desa untuk mengikuti rangkaian acara pembukaan yang telah dipersiapkan. Suasana hangat dan penuh semangat terasa sejak awal. Setiap panitia menjalankan perannya dengan baik, memastikan jalannya acara berlangsung lancar dari awal hingga akhir. Acara dimulai dengan pembacaan doa, lalu sambutan dari Dosen Pembimbing Lapangan (DPL), dilanjutkan oleh Kepala Desa Harumansari, serta perwakilan koordinator desa. Momen ini menjadi awal yang resmi dan penuh makna bagi kami sebagai mahasiswa yang siap berkontribusi di tengah masyarakat. Acara ditutup dengan sesi foto bersama—sebuah simbol bahwa kami siap untuk melangkah, bekerja sama, dan belajar di desa ini selama masa pengabdian.",


    "Hari Kedua: Menyapa dan Menjelajah Desa  >> Hari ini jadi hari penuh langkah dan cerita. Pagi dimulai dengan belanja ke pasar tradisional, bukan cuma cari kebutuhan logistik, tapi juga mulai membaur dengan ritme kehidupan warga. Setelah itu, kami berkeliling ke beberapa wilayah di Desa Harumansari: RW 1, 5, 6, dan 11. Silaturahmi ke tokoh masyarakat jadi agenda utama, sambil menggali informasi tentang program-program yang sedang berjalan di lingkungan mereka. Dari satu rumah ke rumah lainnya, kami disambut dengan ramah dan antusias. Banyak insight yang kami dapatkan, mulai dari potensi lokal sampai tantangan yang dihadapi masing-masing wilayah. Kami juga berkesempatan mengunjungi beberapa institusi pendidikan di desa ini: SD Muhammadiyah, SMP Muhammadiyah, dan SMK Muhammadiyah. Selain menjalin komunikasi awal, kami juga mulai menyusun gambaran tentang potensi kolaborasi untuk program KKN kami ke depan. Malam harinya, kami kembali ke RW 1 untuk silaturahmi lanjutan. Sebagai penutup hari, kami berkesempatan menyaksikan pertunjukan kesenian silat dari warga setempat. Suasana hangat, kekeluargaan, dan semangat budaya terasa kuat malam itu. Padat, tapi penuh makna. Hari kedua selesai, tapi semangatnya terus berlanjut.",
    
    "Hari Ketiga: Belajar, Menyapa, dan Mendengar  >> Hari ini kami memulai pagi dengan kunjungan ke SDN Harumansari II. Sambil mengenal lingkungan sekolah, kami juga berdiskusi ringan dengan tenaga pendidik di sana mengenai kegiatan belajar dan kondisi siswa sehari-hari. Setelah itu, kami melanjutkan kunjungan ke Puskesdes setempat untuk mengenal lebih dekat layanan kesehatan yang tersedia bagi warga desa. Menjelang siang, kami menghadiri pengajian rutin mingguan di RW 5. Di sana, kami memperkenalkan diri sebagai mahasiswa KKN yang akan tinggal dan berkontribusi selama beberapa minggu ke depan. Sambil mendengarkan kajian yang disampaikan hari itu, kami juga menikmati suasana kebersamaan yang hangat dan akrab. Warga menyambut kami dengan ramah dan bahkan menyuguhkan hidangan sederhana yang menambah kehangatan momen silaturahmi. Hari ini terasa hangat, bukan karena cuaca, tapi karena sambutan tulus dari masyarakat yang perlahan membuat kami merasa seperti di rumah sendiri.",
    
    "Hari Keempat: Bagi Peran, Tetap Terhubung  >> Hari ini kami membagi tim agar tetap bisa mengikuti kegiatan warga meskipun jadwal bertabrakan. Para mahasiswi mengikuti kegiatan senam sore bersama ibu-ibu di RW 6. Gerakannya mungkin sederhana, tapi suasananya penuh tawa dan semangat. Jadi ajang seru untuk akrab dan makin dekat dengan warga perempuan setempat. Sementara itu, para mahasiswa mengikuti pengajian di RW 5. Kegiatan ini jadi ruang untuk memperdalam silaturahmi sekaligus menambah wawasan keagamaan bersama masyarakat. Pembagian tugas seperti ini jadi bentuk adaptasi kami di lapangan, belajar hadir dan terlibat secara aktif, meskipun waktunya bersamaan dan tempatnya berbeda. Karena jadi bagian dari masyarakat berarti juga siap untuk berbagi peran dan tetap terhubung.",
    
    "Hari Kelima: Dari Jumsih Hingga Silat Malam Hari  >> Pagi ini kami memulai hari dengan kegiatan Jumat Bersih (Jumsih) bersama warga setempat. Fokus kegiatan kali ini adalah pembersihan area makam. Gotong royong terasa begitu nyata—semua turun tangan dengan semangat. Kegiatan ditutup dengan botram (makan bersama) bareng ibu-ibu, yang makin menguatkan rasa kebersamaan dan kekeluargaan. Siang harinya, kami menghadiri pengajian rutin di RW 1. Kegiatan ini bukan hanya jadi ruang untuk silaturahmi, tapi juga memperkaya wawasan dan nilai-nilai spiritual selama masa pengabdian kami. Malamnya, kami menyempatkan diri untuk mengunjungi sanggar seni di dekat posko. Di sana, anak-anak sedang berlatih silat secara rutin. Selain memberi dukungan dan apresiasi atas semangat mereka, kami juga berdiskusi santai dengan Ketua RW 1 mengenai rencana kegiatan HUT RI yang akan segera dilaksanakan. Dari pagi hingga malam, hari ini penuh interaksi, kerja sama, dan rencana ke depan.",
    
    "Hari Keenam: Hari Santai, Hati Penuh    >>  Hari ini jadi jeda sejenak dari padatnya agenda, waktu luang yang kami manfaatkan untuk bersantai sekaligus membaur lebih dekat dengan anak-anak sekitar posko. Sore harinya, kami main bareng mereka, jalan-jalan ke sawah sambil ngobrol dan ketawa-tawa kecil. Kebersamaan sederhana yang bikin hati hangat. Setelah itu, kami juga sempat menyaksikan mereka latihan menari di lapangan SD, penuh semangat dan percaya diri, mereka menampilkan gerakan demi gerakan dengan antusias. Hari ini mungkin tanpa agenda resmi, tapi momen kebersamaannya justru jadi pengingat bahwa kehadiran dan interaksi kecil seperti inilah yang bikin masa KKN jadi bermakna.",
    
    "Hari Ketujuh: Turun Tangan & Menyusun Arah    >> Pagi ini, para mahasiswa laki-laki ikut serta dalam kegiatan kerja bakti bersama warga untuk membantu proses pengecoran. Gotong royong berjalan penuh semangat, kerja fisik yang mungkin melelahkan, tapi memberi rasa puas karena bisa langsung terlibat dalam pembangunan lingkungan desa. Menjelang sore, kami berkumpul di posko untuk menyusun pemetaan wilayah dan potensi desa. Kegiatan ini jadi langkah awal dalam merancang program-program KKN ke depan, agar lebih terarah dan sesuai dengan kebutuhan serta kondisi masyarakat setempat. Hari ini jadi kombinasi antara aksi nyata dan refleksi bersama, turun tangan di lapangan sekaligus duduk bareng menyusun rencana. Pelan-pelan, kami belajar menjadi bagian dari ritme desa, bukan sekadar tamu sementara.",
    
    "Hari 8: .",
    
    "Hari 9: .",
    
    "Hari 10: ."
    // Tambahkan deskripsi hingga Hari 35 sesuai kebutuhan
  ];

  // Tambahkan bagian keberangkatan
  const keberangkatanItem = document.createElement("div");
  keberangkatanItem.classList.add("accordion-item");

  const keberangkatanBtn = document.createElement("button");
  keberangkatanBtn.classList.add("accordion-btn");
  keberangkatanBtn.textContent = "Keberangkatan";

  const keberangkatanContent = document.createElement("div");
  keberangkatanContent.classList.add("accordion-content");
  keberangkatanContent.innerHTML = `
    <div class="media-gallery">
      <img src="img/keberangkatan.jpeg" alt="Keberangkatan " class="media" />
      <video controls class="media">
        <source src="video/keberangkatan1.mp4" type="video/mp4" />
        Browser tidak mendukung pemutaran video.
      </video>
      <video controls class="media">
        <source src="video/keberangkatan2.mp4" type="video/mp4" />
        Browser tidak mendukung pemutaran video.
      </video>
    </div>
    <div class="description">
      <p>Hari Keberangkatan: Menuju Awal Perjalanan
      Minggu pagi yang penuh semangat! Kami memulai langkah pertama menuju perjalanan KKN di Garut. Dengan koper, kardus, dan peralatan yang kami susun rapi di atas pick-up, semangat gotong royong terasa sejak dari titik kumpul. Saling bantu, saling tunggu, dan tawa kecil di antara lelah jadi pembuka kisah yang akan kami jalani bersama selama beberapa minggu ke depan. Perjalanan dimulai bukan hanya dengan kendaraan, tapi juga dengan harapan, tekad, dan semangat untuk belajar bersama masyarakat. Setibanya di lokasi, kami langsung bergegas menata posko. Mulai dari bongkar barang, menyusun ruangan, hingga menyesuaikan tempat tidur dan perlengkapan bersama. Walau lelah, rasa antusias membuat semuanya terasa ringan. Hari keberangkatan ditutup dengan posko yang akhirnya siap jadi rumah kedua kami.
      </p>
    </div>
  `;

  keberangkatanItem.appendChild(keberangkatanBtn);
  keberangkatanItem.appendChild(keberangkatanContent);
  container.appendChild(keberangkatanItem);


  for (let i = 1; i <= 14; i++) { // Ubah ke 35 bila sudah ada semua
    const item = document.createElement("div");
    item.classList.add("accordion-item");

    const btn = document.createElement("button");
    btn.classList.add("accordion-btn");
    btn.textContent = `Hari ${i}`;

    const content = document.createElement("div");
    content.classList.add("accordion-content");

    content.innerHTML = `
      <div class="media-gallery">
        <img src="img/hari${i}-1.jpg" alt="Foto Hari ${i} - 1" class="media" />
        <img src="img/hari${i}-2.jpg" alt="Foto Hari ${i} - 2" class="media" />
        <img src="img/hari${i}-3.jpg" alt="Foto Hari ${i} - 3" class="media" />
        <video controls class="media">
          <source src="video/hari${i}.mp4" type="video/mp4" />
          Browser tidak mendukung pemutaran video.
        </video>
      </div>
      <div class="description">
        <p>${deskripsiHari[i - 1] || "Deskripsi belum tersedia untuk hari ini."}</p>
      </div>
    `;

    item.appendChild(btn);
    item.appendChild(content);
    container.appendChild(item);
  }

  // Interaksi accordion
  const accordionButtons = document.querySelectorAll(".accordion-btn");
  accordionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      const isActive = btn.classList.contains("active");

      accordionButtons.forEach((b) => {
        b.classList.remove("active");
        b.nextElementSibling.style.maxHeight = null;
      });

      if (!isActive) {
        btn.classList.add("active");

        // Tambahan delay kecil agar konten sepenuhnya dirender
        setTimeout(() => {
          content.style.maxHeight = content.scrollHeight + "px";
        }, 10);
      }
    });
  });
});
