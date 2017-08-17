// Menu toggle
const menu = document.querySelector('.toggled-menu')
const menuOpen = document.querySelector('.open-menu')
const menuClose = document.querySelector('.close-menu')

function openMenu() {
	menu.classList.add('active')
}

function closeMenu() {
	menu.classList.remove('active')
}

menuOpen.addEventListener('click', openMenu)
menuClose.addEventListener('click', closeMenu)


// Search toggle
const searchIcon = document.querySelector('.search label')
const searchInput = document.querySelector('.search input')

function toggleSearch() {
	searchInput.classList.toggle('active')
	setTimeout(function() {
		searchInput.focus()
	}, 500)
}

searchIcon.addEventListener('click', toggleSearch)

// Mobile Search toggle
const searchMobileIcon = document.querySelector('.search-mobile label')
const searchMobileInput = document.querySelector('.search-mobile input')

function toggleSearchMobile() {
	searchMobileInput.classList.toggle('active')
	setTimeout(function() {
		searchMobileInput.focus()
	}, 500)
}

searchMobileIcon.addEventListener('click', toggleSearchMobile)

// Fade in on scroll
function debounce(func, wait = 10, immediate = true) {
	let timeout
	return function() {
		let context = this,
			args = arguments

		let later = function() {
			timeout = null
			if (!immediate) func.apply(context, args)
		}

		let callNow = immediate && !timeout

		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
		if (callNow) func.apply(context, args)
	}
}

const images = document.querySelectorAll('.programs img')

function checkImage() {
	images.forEach(function(image) {
		// half way through the image
		const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2
		// bottom of the image
    const imageBottom = image.offsetTop + image.height
		const isHalfShown = slideInAt > image.offsetTop
    const isNotScrolledPast = window.scrollY < imageBottom
		if (isHalfShown && isNotScrolledPast) {
			image.parentElement.classList.add('in-view')
		}
	})
}

window.addEventListener('scroll', debounce(checkImage))

// quote slider
const slides = document.querySelectorAll('.slide')
const controls = document.querySelectorAll('.controls span')

controls.forEach(function(control) {
	control.addEventListener('click', function () {
		loadSlide(control)
	})
})

function loadSlide(clickedControl) {
	const chosenSlide = clickedControl.dataset.slide

	controls.forEach(function(control) {
		control.classList.remove('active')
	})
	
	clickedControl.classList.add('active')

	slides.forEach(function(slide) {
		slide.classList.remove('active')
		if (slide.classList.contains('slide-'+chosenSlide)) {
			slide.classList.add('active')
		}
	})
}
