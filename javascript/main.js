// Start Setting Box
let settingBox = document.querySelector(".setting-box");
let icon = document.querySelector(".icon");

icon.addEventListener("click", () => {
  // Add Or Remove Class Open On Setting Box
  settingBox.classList.toggle("open");
  // Add Or Remove Class Spin In Icon
  icon.classList.toggle("fa-spin");
});
// Change Color Option
colorLis = document.querySelectorAll(".option-box li");
colorLis.forEach((li) => {
  li.addEventListener("click", (ele) => {
    // Remove Active Class
    colorLis.forEach((element) => {
      element.classList.remove("active");
    });
    // Add Active Class
    ele.target.classList.add("active");
    // Change Main Color
    document.documentElement.style.setProperty(
      "--main-color",
      `${ele.target.dataset.color}`
    );
    // Set Color Option In local Storage
    window.localStorage.setItem("color", ele.target.dataset.color);
  });
});
// ==================================================================
// Start local Storage
if (window.localStorage.getItem("color") !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    `${window.localStorage.getItem("color")}`
  );
  // Active Class
  colorLis.forEach((element) => {
    element.classList.remove("active");
    if (window.localStorage.getItem("color") === element.dataset.color) {
      element.classList.add("active");
    }
  });
}
// End local Storage
// =====================================================================
// Change Background Option
bcOption = document.querySelectorAll(".option-box .one");

bcOption.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    bcOption.forEach((span) => {
      // Remove Class Active Of All Element In Background
      span.classList.remove("active");
    });
    // Add Class Active Of Active Element  In Background
    e.target.classList.add("active");
    // Add data Set In a Local Storage
    window.localStorage.setItem(
      "change background",
      e.target.dataset.background
    );
  });
});
if (window.localStorage.getItem("change background") !== null) {
  bcOption.forEach((e) => {
    // Remove Class Active Of All Element
    e.classList.remove("active");
    if (
      window.localStorage.getItem("change background") === e.dataset.background
    ) {
      e.classList.add("active");
    }
  });
}
// Change Bullets Option
bulletsOption = document.querySelectorAll(".option-box .two");

bulletsOption.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    // Remove Class Active Of Bullet OPtion
    bulletsOption.forEach((span) => {
      span.classList.remove("active");
    });
    // Add Class Active In Active Element
    e.target.classList.add("active");
    // Add To Local Storage Option Of Bullets
    window.localStorage.setItem("appear bullets", e.target.dataset.bullet);
    window.localStorage.setItem("opacity", e.target.dataset.opacity);
  });
});
if (window.localStorage.getItem("appear bullets") !== null) {
  bulletsOption.forEach((bullet) => {
    // Remove Active Class Of All bullet Element
    bullet.classList.remove("active");
    // Add Class Active In Active bullet Element
    if (
      window.localStorage.getItem("appear bullets") === bullet.dataset.bullet
    ) {
      bullet.classList.add("active");
    }
  });
}
let showBullets = document.querySelectorAll(".bullets li");
bulletsOption.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    if (
      // Check option bullet Of Local Storage And Bullet Yes Or No
      window.localStorage.getItem("appear bullets") === e.target.dataset.bullet
    ) {
      showBullets.forEach((ele) => {
        ele.style.opacity = e.target.dataset.opacity;
      });
    }
  });
});
// Check Of Local Storage Of opacity
if (localStorage.getItem("opacity") !== null) {
  showBullets.forEach((e) => {
    e.style.opacity = localStorage.getItem("opacity");
  });
}
// End Setting Box
// ===========================================================================================
// Bars
let bar = document.querySelector(".bars");
let links = document.querySelector("header .links");

bar.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
document.addEventListener("click", (e) => {
  if (e.target !== links && e.target !== bar) {
    if (links.classList.contains("show-links")) {
      links.classList.remove("show-links");
    }
  }
});

links.addEventListener("click", (e) => {
  e.stopPropagation();
});

// End Bars
// Start Links

let bulletEvent = document.querySelectorAll(".bullets li");
let linksLis = document.querySelectorAll("header .links a");
function scroll(element) {
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView();
    });
  });
}
scroll(bulletEvent);
scroll(linksLis);
// End Links
//=======================================================================================
// Start Bottom

document.querySelector(".setting-box button").addEventListener("click", () => {
  // Remove All Item Of Local Storage
  localStorage.removeItem("color");
  localStorage.removeItem("appear bullets");
  localStorage.removeItem("change background");
  localStorage.removeItem("opacity");
  // Reload page To Reset All Item
  window.location.reload();
});

// End Bottom
//=======================================================================================
// Start Landing Page
let landingPage = document.querySelector(".landing");
let bcImageLanding = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// background-image: url(../Images/landing/05.jpg)

setInterval(() => {
  let randomImage = Math.floor(Math.random() * bcImageLanding.length);
  if (window.localStorage.getItem("change background") === "yes") {
    landingPage.style.backgroundImage = `url(Images/landing/${bcImageLanding[randomImage]})`;
  } else {
    clearInterval();
  }
}, 10000);
// End Landing Page
// Start Our Skills
let ourSkills = document.querySelector(".our-skills");
let skillSpans = document.querySelectorAll(".skill-width span");

window.addEventListener("scroll", () => {
  if (window.scrollY >= ourSkills.offsetTop - 100) {
    skillSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});
// End Our Skills
// Start gallery

let imgGallery = document.querySelectorAll(".our-gallery .image img");

imgGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // create Element To overlay page
    let overlay = document.createElement("div");
    overlay.className = "overlay-page";
    // add over lay on page
    document.body.appendChild(overlay);
    // Create Popup box
    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";
    // Create Img To Popup Box
    let popupImg = document.createElement("img");
    // Add Image Source To popup box
    popupImg.src = img.src;
    popupBox.appendChild(popupImg);
    document.body.appendChild(popupBox);
    // ==============================================
    let spanClose = document.createElement("span");
    let spanText = document.createTextNode("x");
    spanClose.appendChild(spanText);
    spanClose.className = "close";
    popupBox.appendChild(spanClose);
  });
});
document.addEventListener("click", (e) => {
  if (e.target.className === "close") {
    document.querySelector(".overlay-page").remove();
    document.querySelector(".popup-box").remove();
  }
});
// End gallery
