// INITISL SLIDER
const slider = document.querySelector(".slider-main");
const slides = slider.querySelectorAll(".slider-item");

slides[0].classList.add("focus");
slides[0].setAttribute("slide-no", "0");
for (let i = 1; i < slides.length; i++) {
	slides[i].setAttribute("slide-no", i);
	slides[i].classList.add("next");
}

let focusedSlide = slider.querySelector(".slider-item.focus");

// NEXT BUTTON
const nextButton = document.querySelector("#next-btn");

nextButton.addEventListener("click", function () {
	if (focusedSlide.nextElementSibling == null) {
		return;
	}

	focusedSlide.classList.add("prev");
	focusedSlide.classList.remove("focus");
	focusedSlide.classList.remove("next");
	focusedSlide.nextElementSibling.classList.add("focus");
	focusedSlide.nextElementSibling.classList.remove("next");
	checkButton();
});

// PREV BUTTON
const prevButton = document.querySelector("#prev-btn");

prevButton.addEventListener("click", function () {
	if (focusedSlide.previousElementSibling == null) {
		return;
	}

	focusedSlide.classList.add("next");
	focusedSlide.classList.remove("focus");
	focusedSlide.classList.remove("prev");
	focusedSlide.previousElementSibling.classList.add("focus");
	focusedSlide.previousElementSibling.classList.remove("prev");
	checkButton();
});

function checkButton() {
	focusedSlide = slider.querySelector(".slider-item.focus");
	const indexNumber = focusedSlide.getAttribute("slide-no");

	if (indexNumber == 0) {
		prevButton.setAttribute("disabled", "true");
	} else {
		prevButton.removeAttribute("disabled");
	}

	if (indexNumber == slides.length - 1) {
		nextButton.setAttribute("disabled", "true");
	} else {
		nextButton.removeAttribute("disabled");
	}
	chengeNav();
}

const navigation = document.querySelector(".slider-navigation");
function chengeNav() {
	const slideNo = focusedSlide.getAttribute("slide-no");
	const navigationItems = navigation.querySelectorAll(".slide-nav");

	for (let i = 0; i < slides.length; i++) {
		navigationItems[i].classList.remove("focus");
	}
	navigationItems[slideNo].classList.add("focus");
}

for (let i = 0; i < slides.length; i++) {
	navigation.innerHTML += `<button class="slide-nav"></button>`;
}

checkButton();

// SETTING WIDHT AND HEIGHT
const sliderWidth = slider.getAttribute("data-width");
const sliderHeight = slider.getAttribute("data-height");
slider.style.width = sliderWidth;
slider.style.height = sliderHeight;

slides.forEach((item) => (item.style.width = sliderWidth));
