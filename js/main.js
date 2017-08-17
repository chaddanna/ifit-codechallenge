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
	var timeout
	return function() {
		var context = this,
			args = arguments
		var later = function() {
			timeout = null
			if (!immediate) func.apply(context, args)
		}
		var callNow = immediate && !timeout
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
