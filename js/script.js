//Slick carousel configurations:
$(document).ready(function () {
  $(".slick-carousel").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow:
      '<span class="prev_arrow"><i class="fa-solid fa-arrow-left"></i></span>',
    nextArrow:
      '<span class="next_arrow"><i class="fa-solid fa-arrow-right"></i></span>',
    responsive: [
      {
        breakpoint: 1239,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});

//Modal window events:
const openButtons = document.querySelectorAll(".open-modal");
const popup = document.querySelector(".popup-window");
const closeButton = document.querySelector(".close-menu");

openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    popup.style.display = "flex";
  });
});

closeButton.addEventListener("click", () => {
  popup.style.display = "none";
});

// Form validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".app-popup__content-form");
  form.addEventListener("submit", function (event) {
    const nameInput = document.getElementById("contact-number");
    const phoneNumberInput = document.querySelector(
      ".app-popup__content-form__field-custom_select-input"
    );
    const checkbox = document.querySelector(
      ".app-popup__content-form_checkbox"
    );

    if (nameInput.value.trim() === "") {
      alert("Please enter your name");
      event.preventDefault();
      return;
    }
    if (phoneNumberInput.value.trim() === "") {
      alert("Please enter your phone number");
      event.preventDefault();
      return;
    }

    if (!checkbox.checked) {
      alert("Please agree to the terms and conditions");
      event.preventDefault();
      return;
    }
  });
});
