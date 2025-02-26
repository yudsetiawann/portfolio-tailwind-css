// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const navFixed = header.offsetTop;
  // const toTop = document.querySelector("#to-top");

  if (window.scrollY > navFixed) {
    header.classList.add("navbar-fixed");
    // toTop.classList.remove("hidden");
    // toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    // toTop.classList.remove("flex");
    // toTop.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik diluar Hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Dark Mode
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// Pindahkan posisi toggle sesuai Mode
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

window.scrollTo({
  top: 0,
  behavior: "smooth",
});


// Send to Whatsapp
document.getElementById("sendToWhatsapp").addEventListener("click", function () {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var phoneNumber = "628562044148";

  var text = `Hello, my name is ${name}.\nEmail: ${email}\nMessage: ${message}`;

  var whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

  window.open(whatsappUrl, "_blank");
});
