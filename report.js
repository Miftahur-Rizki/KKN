document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("report-accordion");

  const deskripsiHari = [
    "Hari 1: Pembukaan dan perkenalan dengan warga.",
    "Hari 2: Sosialisasi program kerja dan observasi lingkungan.",
    "Hari 3: Gotong royong membersihkan area sekitar posko.",
    "Hari 4: Kegiatan belajar bersama anak-anak PAUD.",
    "Hari 5: Penyuluhan kebersihan lingkungan kepada warga.",
    "Hari 6: Survey rumah tidak layak huni.",
    "Hari 7: Pelatihan pengolahan sampah rumah tangga.",
    "Hari 8: Kerja bakti pembersihan drainase desa.",
    "Hari 9: Pelatihan penggunaan media digital untuk UMKM.",
    "Hari 10: Diskusi rencana program jangka pendek."
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
      <img src="img/keberangkatan1.jpg" alt="Keberangkatan " class="media" />
      <video controls class="media">
        <source src="video/keberangkatan1.mp4" type="video/mp4" />
        Browser tidak mendukung pemutaran video.
      </video>
      <video controls class="media">
        <source src="video/keberangkatan2.mp4" type="video/mp4" />
        Browser tidak mendukung pemutaran video.
      </video>
      <video controls class="media">
        <source src="video/keberangkatan3.mp4" type="video/mp4" />
        Browser tidak mendukung pemutaran video.
      </video>
    </div>
    <div class="description">
      <p>Keberangkatan dari kampus menuju lokasi KKN, persiapan logistik dan doa bersama.</p>
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
