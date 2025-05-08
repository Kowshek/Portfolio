// Set the current year dynamically in the footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Open project modal and insert project-specific content
function openModal(project) {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");

  let content = "";

  // Set modal content based on project type
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

  modalBody.innerHTML = content; // Insert content into modal
  modal.style.display = "block"; // Show the modal
}

// Close the modal when the close button is clicked
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Form submission with validation and EmailJS integration
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get form input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation for empty fields
    if (name === "" || email === "" || subject === "" || message === "") {
      alert("Please fill out all fields!");
      return;
    }

    // Basic email format check
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address!");
      return;
    }

    // Parameters to send via EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    // Send form data using EmailJS
    emailjs.send("service_4233a3b", "template_6i36dlq", templateParams).then(
      function () {
        // Show success alert with SweetAlert
        Swal.fire({
          icon: "success",
          title: "Message Sent",
          text: "Your message has been mailed to me. Thank you :)",
          confirmButtonColor: "#3085d6",
        });

        contactForm.reset(); // Clear the form
      },
      function (error) {
        // Show error alert if sending fails
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "There's been some error on our side. Please try again",
          confirmButtonColor: "#3085d6",
        });
        console.error("EmailJS error:", error); // Log error to console
      }
    );
  });
}

// Close modal when clicking outside of modal content
window.addEventListener("click", function (e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    closeModal();
  }
});

// Typewriter text animation variables and settings
const titles = [
  "I'm Kowshek Iyyappan",
  "or a Frontend Developer?",
  " or React Developer?",
  "or maybe UI Enthusiast?",
  "Guess we'll find out!",
];
let index = 0;
let charIndex = 0;
let currentTitle = "";
let isDeleting = false;
const el = document.querySelector(".typewriter");

// Recursive function for typing and deleting text like a typewriter
function type() {
  if (index >= titles.length) index = 0;
  currentTitle = titles[index];

  // Deleting text
  if (isDeleting) {
    el.textContent = currentTitle.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      index++; // Move to next phrase
    }
  } else {
    el.textContent = currentTitle.substring(0, charIndex++);
    if (charIndex > currentTitle.length) {
      isDeleting = true;
      setTimeout(type, 1000); // Pause before deleting
      return;
    }
  }

  // Call the function again with different speed for typing vs deleting
  setTimeout(type, isDeleting ? 50 : 100);
}
type(); // Start the typewriter effect
