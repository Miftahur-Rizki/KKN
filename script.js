function showDay(dayNumber) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  for (let i = 1; i <= 3; i++) {
    const img = document.createElement("img");
    img.src = `images/day${dayNumber}-${i}.jpg`;
    img.alt = `Foto Day ${dayNumber} - ${i}`;
    gallery.appendChild(img);
  }
}

// Tambahkan jika kamu ingin tombol HTML berpindah halaman (opsional)
document.addEventListener("DOMContentLoaded", function () {
  const aboutBtn = document.getElementById("btn-about");
  const reportBtn = document.getElementById("btn-report");

  if (aboutBtn) {
    aboutBtn.addEventListener("click", () => {
      window.location.href = "about.html";
    });
  }

  if (reportBtn) {
    reportBtn.addEventListener("click", () => {
      window.location.href = "report.html";
    });
  }
  
});
