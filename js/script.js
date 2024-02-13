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
