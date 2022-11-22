// Load font
addStylesheetURL('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap')


document.addEventListener("DOMContentLoaded", function () {
	// Window width
	WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth


	// Is there support for touch events or is it an apple device
	if (!is_touch_device() || !/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) document.documentElement.classList.add('custom_scroll')


	// Set the width of the scrollbar
	document.documentElement.style.setProperty('--scroll_width', widthScroll() + 'px')


	// Mob. version
	firstResize = false

	if (document.body.clientWidth < 375) {
		document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'

		firstResize = true
	}
})



window.addEventListener('resize', function () {
	let windowW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Моб. версия
		if (!firstResize) {
			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'

			firstResize = true
		} else {
			firstResize = false
		}


		// Перезапись ширины окна
		WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
	}
})



// Secondary functions
function addStylesheetURL(url) {
	var link = document.createElement('link')
	link.rel = 'stylesheet'
	link.href = url
	document.getElementsByTagName('head')[0].appendChild(link)

}


const is_touch_device = () => !!('ontouchstart' in window)


const widthScroll = () => {
	let div = document.createElement('div')

	div.style.overflowY = 'scroll'
	div.style.width = '50px'
	div.style.height = '50px'
	div.style.visibility = 'hidden'

	document.body.appendChild(div)

	let scrollWidth = div.offsetWidth - div.clientWidth
	document.body.removeChild(div)

	return scrollWidth
}