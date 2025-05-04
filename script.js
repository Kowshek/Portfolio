// Dynamic Year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Modal functionality for projects
function openModal(project) {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");

  let content = "";

  if (project === "tv") {
    content = `
            <h2>TV Schedule Web App</h2>
            <p>Developed a full-fledged TV program scheduler for managing shows across multiple channels, built with React, .NET Core, and MySQL backend.</p>
        `;
  } else if (project === "portfolio") {
    content = `
            <h2>Personal Portfolio</h2>
            <p>A creative personal website built with HTML5, CSS3, JavaScript animations, fully responsive and hosted online.</p>
        `;
  } else if (project === "fantasy") {
    content = `
            <h2>Fantasy Cricket App</h2>
            <p>Crafted an IPL fantasy platform analyzing pitch reports, player form, and team compositions for better winning strategies.</p>
        `;
  }

  modalBody.innerHTML = content;
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Contact form validation
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
      alert("Please fill out all fields!");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address!");
      return;
    }

    alert("Thank you! Your message has been sent successfully.");
    contactForm.reset();
  });
}

// Close modal when clicking outside
window.addEventListener("click", function (e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    closeModal();
  }
});
