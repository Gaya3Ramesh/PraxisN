// Nav hamburger

const menu = document.querySelector(".pn-hamburger");
const ul = document.querySelector(".nav-list");

menu.addEventListener("click", function () {
  ul.classList.toggle("show");
});

// carousel

const gap = 16;

const testicarousel = document.getElementById("pn-testi-carousel"),
    testiCont = document.getElementById("pn-testi-content"),
    next = document.getElementById("next"),
    prev = document.getElementById("prev");

next.addEventListener("click", e => {
    testicarousel.scrollBy(width + gap, 0);
    if (testicarousel.scrollWidth !== 0) {
        prev.style.display = "flex";
    }
    if (testiCont.scrollWidth - width - gap <= testicarousel.scrollLeft + width) {
        next.style.display = "none";
    }
});
prev.addEventListener("click", e => {
    testicarousel.scrollBy(-(width + gap), 0);
    if (testicarousel.scrollLeft - width - gap <= 0) {
        prev.style.display = "none";
    }
    if (!testiCont.scrollWidth - width - gap <= testicarousel.scrollLeft + width) {
        next.style.display = "flex";
    }
});

let width = testicarousel.offsetWidth;
window.addEventListener("resize", e => (width = testicarousel.offsetWidth));


// Modal1
var presFormmodal = document.getElementById("pn-presform");
var presFormBtn = document.getElementById("pn-presFormBtn");
var prescloseIcon = document.getElementsByClassName("pn-prescloseicon")[0];
presFormBtn.onclick = function () {
    presFormmodal.style.display = "flex"
}
prescloseIcon.onclick = function () {
    presFormmodal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == presFormmodal) {
        presFormmodal.style.display = "none";
    }
}

// Modal2
var transFormmodal = document.getElementById("pn-transForm");
var transFormBtn = document.getElementById("pn-transFormBtxn");
var transcloseIcon = document.getElementsByClassName("pn-transcloseicon")[0];
transFormBtn.onclick = function () {
    transFormmodal.style.display = "flex"
}
transcloseIcon.onclick = function () {
    transFormmodal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == presFormmodal) {
        transFormmodal.style.display = "none";
    }
}

// Modal3
var contFormmodal = document.getElementById("pn-contForm");
var contFormBtn = document.getElementById("pn-contFormBtxn");
var contcloseIcon = document.getElementsByClassName("pn-contcloseicon")[0];
contFormBtn.onclick = function () {
    contFormmodal.style.display = "flex"
}
contcloseIcon.onclick = function () {
    contFormmodal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == contFormmodal) {
        contFormmodal.style.display = "none";
    }
}

// online prescription

var onlinePresmodal = document.getElementById("pn-online-pres");
var onlinePresBtn = document.getElementById("pn-online-pres-btn");
var onlinePrescloseIcon = document.getElementsByClassName("pn-onlineprescloseicon")[0];
onlinePresBtn.onclick = function () {
    onlinePresmodal.style.display = "flex"
}
onlinePrescloseIcon.onclick = function () {
    onlinePresmodal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == onlinePresmodal) {
        onlinePresmodal.style.display = "none";
    }
}

//helath examination

var healthExmodal = document.getElementById("pn-health-ex");
var healthExBtn = document.getElementById("pn-healthEx-btn");
var healthExcloseIcon = document.getElementsByClassName("pn-healthExcloseicon")[0];
healthExBtn.onclick = function () {
    healthExmodal.style.display = "flex"
}
healthExcloseIcon.onclick = function () {
    healthExmodal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == healthExmodal) {
        healthExmodal.style.display = "none";
    }
}

// disease management
var diseaseManagmodal = document.getElementById("pn-disease-manag");
var diseaseManagBtn = document.getElementById("pn-diseaseManag-btn");
var diseaseManagcloseIcon = document.getElementsByClassName("pn-diseaseManagcloseicon")[0];
diseaseManagBtn.onclick = function () {
    diseaseManagmodal.style.display = "flex"
}
diseaseManagcloseIcon.onclick = function () {
    diseaseManagmodal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == diseaseManagmodal) {
        diseaseManagmodal.style.display = "none";
    }
}

//minor surgery
var minorSurmodal = document.getElementById("pn-minor-sur-modal");
var minorSurBtn = document.getElementById("pn-minor-sur-btn");
var minorSurcloseIcon = document.getElementsByClassName("pn-minorSurcloseicon")[0];
minorSurBtn.onclick = function () {
    minorSurmodal.style.display = "flex"
}
minorSurcloseIcon.onclick = function () {
    minorSurmodal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == minorSurmodal) {
        minorSurmodal.style.display = "none";
    }
}

//home visit
var homeVisitmodal = document.getElementById("pn-home-visit");
var homeVisitBtn = document.getElementById("pn-home-visit-btn");
var homeVisitcloseIcon = document.getElementsByClassName("pn-homeVisitcloseicon")[0];
homeVisitBtn.onclick = function () {
    homeVisitmodal.style.display = "flex"
}
homeVisitcloseIcon.onclick = function () {
    homeVisitmodal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == homeVisitmodal) {
        homeVisitmodal.style.display = "none";
    }
}

//family doctor
var famDrCaremodal = document.getElementById("pn-famDr-care");
var famDrCareBtn = document.getElementById("pn-famDr-care-btn");
var famDrCarecloseIcon = document.getElementsByClassName("pn-famDrCarecloseicon")[0];
famDrCareBtn.onclick = function () {
    famDrCaremodal.style.display = "flex"
}
famDrCarecloseIcon.onclick = function () {
    famDrCaremodal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == famDrCaremodal) {
        famDrCaremodal.style.display = "none";
    }
}

// Dom change
$(document).on("click", ".map-point-sm", function () {
  var show = $(this).data("show");
  ul.classList.toggle("show");

  $(show).removeClass("hide");
  setTimeout(function() {
    $(show).addClass("show");
  }, 10);


  $(show).siblings(".map-content").removeClass("show");
  $('html, body').scrollTop(0);

  setTimeout(function() {
    $(show).siblings(".map-content").addClass("hide");
  }, 10);
});


$(document).ready(function(){
    // Open mobile nav
    $('#nav-toggle').click(function(){
        $('#nav-menu').toggleClass('active');
    });

    // Close mobile nav when clicking outside the nav menu
    $(document).on('click', function(event) {
        if (!$(event.target).closest('#nav-menu').length && !$(event.target).is('#nav-toggle')) {
            $('#nav-menu').removeClass('active');
        }
    });
});



// active state nav bar
// $(document).ready(function () {
  
//   $(".nav-item").click(function (){
//     $(this).addClass("active-item").siblings().removeClass("active-item");
//   });
// });
