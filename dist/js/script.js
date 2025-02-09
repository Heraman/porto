/* ========================== 
  Dark & Light Mode 
============================= */
const lightModeBtn = document.getElementById("light-mode-btn");
  const darkModeBtn = document.getElementById("dark-mode-btn");

  // Cek mode yang tersimpan di localStorage
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  }

  lightModeBtn.addEventListener("click", () => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  });

  darkModeBtn.addEventListener("click", () => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  });
  
/* ========================== 
  Navigation Active & Hover 
============================= */
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar .nav-menu ul li a");

  function activateLightMode() {
    let current = "hero";
    let minDistance = Infinity;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      const distance = Math.abs(window.scrollY - sectionTop);

      if (window.scrollY >= sectionTop && distance < minDistance) {
        current = section.getAttribute("id");
        minDistance = distance;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("dark-active"); // Hapus warna dark mode
      link.classList.remove("light-active"); // Pastikan tidak ada class aktif sebelumnya

      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("light-active");
      }
    });
  }

  function activateDarkMode() {
    let current = "hero";
    let minDistance = Infinity;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      const distance = Math.abs(window.scrollY - sectionTop);

      if (window.scrollY >= sectionTop && distance < minDistance) {
        current = section.getAttribute("id");
        minDistance = distance;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("light-active"); // Hapus warna light mode
      link.classList.remove("dark-active"); // Pastikan tidak ada class aktif sebelumnya

      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("dark-active");
      }
    });
  }

  function checkThemeAndActivateMenu() {
    if (document.documentElement.classList.contains("dark")) {
      activateDarkMode();
    } else {
      activateLightMode();
    }
  }

  window.addEventListener("scroll", checkThemeAndActivateMenu);
  checkThemeAndActivateMenu(); // Panggil saat halaman pertama kali dimuat

  // Tambahkan event listener untuk tombol mode
  const darkModeToggle = document.getElementById("dark-mode-btn");
  const lightModeToggle = document.getElementById("light-mode-btn");

  darkModeToggle.addEventListener("click", () => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    checkThemeAndActivateMenu(); // Update warna menu setelah mode berubah
  });

  lightModeToggle.addEventListener("click", () => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    checkThemeAndActivateMenu(); // Update warna menu setelah mode berubah
  });

  // Pastikan mode terakhir dari localStorage dipakai saat halaman dimuat ulang
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  checkThemeAndActivateMenu(); // Update warna menu setelah halaman reload
});


/* ========================== 
  Toggle Menu (Hamburger) 
============================= */
document.querySelector(".menu-toggle").addEventListener("click", function () {
  const menu = document.querySelector(".nav-menu");
  const btnMode = document.querySelector(".btn-mode");
  const menuIcon = document.querySelector("#menu-icon");

  // Toggle class 'show' untuk navbar dan btn-mode
  menu.classList.toggle("show");
  btnMode.classList.toggle("show"); // Memunculkan btn-mode

  if (menu.classList.contains("show")) {
    menuIcon.innerHTML =
      '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.70711 0.292893C1.31658 -0.097631 0.683418 -0.0976311 0.292893 0.292893C-0.097631 0.683417 -0.0976312 1.31658 0.292893 1.70711L5.5858 7.00002L0.292922 12.2929C-0.0976021 12.6834 -0.0976021 13.3166 0.292922 13.7071C0.683446 14.0976 1.31661 14.0976 1.70714 13.7071L7.00001 8.41423L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41423 7.00002L13.7071 1.70711C14.0977 1.31658 14.0977 0.683419 13.7071 0.292895C13.3166 -0.0976298 12.6834 -0.0976294 12.2929 0.292895L7.00001 5.5858L1.70711 0.292893Z" fill="#fff"/></svg>';
  } else {
    menuIcon.innerHTML =
      '<svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H16C16.5523 0 17 0.447715 17 1C17 1.55228 16.5523 2 16 2H1C0.447715 2 0 1.55228 0 1Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M0 7C0 6.44772 0.447715 6 1 6H16C16.5523 6 17 6.44772 17 7C17 7.55228 16.5523 8 16 8H1C0.447715 8 0 7.55228 0 7Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4 13C4 12.4477 4.44772 12 5 12L16 12C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H5C4.44772 14 4 13.5523 4 13Z" fill="#fff"/></svg>';
  }
});

/* ============== 
  Back to Top  
================= */
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ========================== 
  Hero Section Running Text
============================= */
const textArray = [
  "Graphic Designer",
  "Web Developer",
  "UI/UX Designer",
  "Freelancer",
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const animatedText = document.querySelector(".animated-text");

function typeEffect() {
  const currentText = textArray[textIndex];
  if (isDeleting) {
    animatedText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    animatedText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typingSpeed = isDeleting ? 50 : 100; // Kecepatan mengetik dan menghapus

  if (!isDeleting && charIndex === currentText.length) {
    typingSpeed = 1500; // Delay sebelum mulai menghapus
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textArray.length; // Loop ke teks berikutnya
    typingSpeed = 500; // Delay sebelum mengetik teks baru
  }

  setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

/* ========================== 
  Hero Section Spark Effect 
============================= */
document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".hero");

  hero.addEventListener("mousemove", function (e) {
    const spark = document.createElement("div");
    spark.classList.add("cursor-effect");
    document.body.appendChild(spark);

    spark.style.left = `${e.clientX}px`;
    spark.style.top = `${e.clientY}px`;

    setTimeout(() => {
      spark.remove();
    }, 400);
  });
});

/* ========================== 
  Skills Progress 
============================= */
document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress-bar");

  function animateProgressBars() {
    progressBars.forEach((bar) => {
      const progressBarWrap = bar.parentElement.parentElement;
      const rect = progressBarWrap.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.85) {
        // Aktif saat 85% masuk viewport
        const value = bar.getAttribute("aria-valuenow");
        bar.style.width = value + "%";
      }
    });
  }

  window.addEventListener("scroll", animateProgressBars);
  animateProgressBars(); // Jalankan saat halaman pertama kali dimuat
});

/* ================== 
  Gallery Portfolio
===================== */
document.addEventListener("DOMContentLoaded", function () {
  function makeInfiniteScroll(selector) {
    const gallery = document.querySelector(selector);
    if (!gallery) return;

    const images = [...gallery.children];
    const clone = images.map((img) => img.cloneNode(true));

    clone.forEach((img) => gallery.appendChild(img));
    }

    makeInfiniteScroll(".gallery-top");
    makeInfiniteScroll(".gallery-bottom");
});

/* ========================== 
  Contact Form Google Sheet 
============================= */
const scriptURL = "https://script.google.com/macros/s/AKfycbw1azL5ljglzjFO50ccbCFU7TLc96NqnHN_qe-hYzjDS9qqOit4ezVeF2uvhlftsDPZ/exec";
const form = document.forms["my-portfolio-contact-form"];
const submitBtn = document.getElementById("submit-btn");
const notification = document.getElementById("notification");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Tambahkan efek loading pada tombol
  submitBtn.textContent = "Sending...";
  submitBtn.classList.add("loading");
  submitBtn.disabled = true;

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);

      // Tampilkan notifikasi
      notification.classList.remove("hidden");
      notification.style.display = "block";

      // Reset form setelah sukses
      form.reset();

      // Kembalikan tombol ke keadaan semula setelah 3 detik
      setTimeout(() => {
        submitBtn.textContent = "Send Message";
        submitBtn.classList.remove("loading");
        submitBtn.disabled = false;
        notification.style.display = "none";
      }, 1500);
    })
    .catch((error) => {
      console.error("Error!", error.message);
      submitBtn.textContent = "Send Message";
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;
    });
});

