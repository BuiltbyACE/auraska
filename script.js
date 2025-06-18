function openNav() {
    document.getElementById("mySidenav").style.width = "320px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  
  
  // Get the button
  let mybutton = document.getElementById("myBtn");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  
  // popup
  function togglePopup1() {
    document.getElementById("popup-1").classList.toggle("active");
  }
  
  function togglePopup2() {
    document.getElementById("popup-2").classList.toggle("active");
  }
  
  //success popup
  // Get the popup container and success message elements
  const popupContainer = document.querySelector('.popup-container');
  const successMessage = document.querySelector('#success-message');
  const formElements = document.querySelectorAll('#contactForm input, #contactForm textarea');
  
  // Function to submit the form and show the popup
  function submitForm() {
    // Prevent default form submission
    // event.preventDefault();
  
    // Submit the form using AJAX or fetch API
    // For demonstration purposes, I'll use a simple timeout
    setTimeout(() => {
      // Show the popup with a success message
      successMessage.textContent = 'Your message has been sent successfully!';
      popupContainer.classList.add('show-popup');
  
      // Clear the form fields
      formElements.forEach((element) => {
        element.value = '';
      });
    }, 1000);
  
    return false;
  }
  
  // Add an event listener to close the popup
  document.querySelector('.close-popup').addEventListener('click', () => {
    popupContainer.classList.remove('show-popup');
  });
  
  
  
  
  