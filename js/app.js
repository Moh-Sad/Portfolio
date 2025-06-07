/* ------  typing animation  ------ */
var typed = new Typed(".typing", {
  strings: ["", "Web Designer", "UI/UX Designer", "Full-Stack Developer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

/* ------  Aside  ------ */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

// Function to update active nav item based on visible section
function updateActiveNav() {
  let currentSection = "";

  allSection.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop - 300 &&
      window.scrollY < sectionTop + sectionHeight - 300
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navList.forEach((li) => {
    const a = li.querySelector("a");
    a.classList.remove("active");
    if (a.getAttribute("href").split("#")[1] === currentSection) {
      a.classList.add("active");
    }
  });
}

// Add scroll event listener
window.addEventListener("scroll", updateActiveNav);

// Original click functionality remains
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
}

// Calculate age based on birth date
document.addEventListener("DOMContentLoaded", function () {
  const birthYear = 2002;
  const today = new Date();
  let age = today.getFullYear() - birthYear;
  // Adjust if birthday hasn't occurred yet this year
  const birthMonth = 2; // March (0-based index)
  const birthDay = 24;
  if (
    today.getMonth() < birthMonth ||
    (today.getMonth() === birthMonth && today.getDate() < birthDay)
  ) {
    age--;
  }
  document.getElementById("age").textContent = age;

  // Initialize active section on page load
  updateActiveNav();
});

// Initialize EmailJS with your public key
(function () {
  emailjs.init("o09xYFHEz1Pl454PR"); // Your public key
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Send email
    emailjs
      .send("service_z78yklj", "template_geziw1i", {
        name: name,
        email: email,
        title: subject,
        message: message,
      })
      .then(
        function (response) {
          submitBtn.textContent = "Message Sent!";
          document.getElementById("contact-form").reset();
          setTimeout(() => {
            submitBtn.textContent = "Send Message";
            submitBtn.disabled = false;
          }, 3000);
        },
        function (error) {
          submitBtn.textContent = "Error! Try Again";
          submitBtn.disabled = false;
          console.error("Failed to send message:", error);
        }
      );
  });
