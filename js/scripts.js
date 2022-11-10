// Load font
addStylesheetURL('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap')



document.addEventListener("DOMContentLoaded", function () {
	// Window width
	WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
	BODY = document.getElementsByTagName('body')[0]



	// Есть ли поддержка тач событий или это apple устройство
	if (!is_touch_device() || !/(Mac|iPhone|iPod|MacIntel|iPad)/i.test(navigator.platform)) document.documentElement.classList.add('custom_scroll')


	// Ленивая загрузка
	const boxes = document.querySelectorAll('.lazyload, .animate')

	function scrollTracking(entries) {
		for (const entry of entries) {
			if (entry.intersectionRatio >= 0.2 && !entry.target.classList.contains('loaded')) {
				entry.target.src = entry.target.getAttribute('data-src')
				entry.target.classList.add('loaded')
			}

			if (entry.intersectionRatio >= 0.2 && entry.target.classList.contains('animate')) {
				entry.target.classList.add('animated')
			}
		}
	}

	const observer = new IntersectionObserver(scrollTracking, {
		threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
	})

	boxes.forEach(element => observer.observe(element))


	// Установка ширины стандартного скроллбара
	document.documentElement.style.setProperty('--scroll_width', widthScroll() + 'px')


	// Моб. версия
	firstResize = false

	if (document.body.clientWidth < 375) {
		document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'

		firstResize = true
	}


	// Мини всплывающие окна
	const miniModalBtns = document.querySelectorAll('.mini_modal_btn'),
		miniModals = document.querySelectorAll('.mini_modal')

	if (miniModalBtns) {
		miniModalBtns.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				const modalId = el.getAttribute('data-modal-id')

				if (el.classList.contains('active')) {
					el.classList.remove('active')
					miniModals.forEach(modal => modal.classList.remove('active'))

					if (is_touch_device()) BODY.style = 'cursor: default;'
				} else {
					miniModalBtns.forEach(btn => btn.classList.remove('active'))
					el.classList.add('active')

					miniModals.forEach(modal => modal.classList.remove('active'))

					const modal = document.getElementById(modalId)

					modal.classList.add('active')

					setTimeout(() => {
						if (el.closest('.search')) {
							modal.querySelector('.input').focus()
						}
					}, 100)

					if (is_touch_device()) BODY.style = 'cursor: pointer;'
				}
			})
		})
	}

	// Закрываем всплывашку при клике за её пределами
	document.addEventListener('click', e => {
		if (!e.target.closest('.modal_cont')) {
			miniModals.forEach(modal => modal.classList.remove('active'))
			miniModalBtns.forEach(btn => btn.classList.remove('active'))

			if (is_touch_device()) BODY.style = 'cursor: default;'
		}
	})


	// Добавление в сравнение
	const validatorChecks = document.querySelectorAll('.validator .checkbox'),
		compareError = document.querySelector('.compare_error'),
		pinnedItems = document.querySelector('.pinned_items'),
		tableHead = document.querySelector('.table_head'),
		compareLimit = 5

	if (validatorChecks) {
		validatorChecks.forEach(el => {
			el.addEventListener('click', e => {
				if (e.target.classList.contains('checkbox')) {
					let checkInputs = document.querySelectorAll('.validator .checkbox input:checked'),
						validator = el.closest('.validator')

					if (checkInputs.length < compareLimit || validator.classList.contains('pinned')) {
						// Добавление
						if (!validator.classList.contains('pinned')) {
							validator.classList.add('pinned')

							// Содание кнопки отмеченного валика
							let pinnedBtnHTML = new String()
								+ '<button class="btn pinned_btn">'
								+ '<span>' + validator.querySelector('.col_moniker .logo + *').innerText + '</span>'
								+ '<svg><use xlink:href="images/sprite.svg#ic_close"></use></svg>'
								+ '</button>'

							// Добавление кнопки отмеченного валика
							pinnedItems.querySelector('.val').innerHTML += pinnedBtnHTML

							// Добавление класса шапке таблицы
							pinnedItems.querySelector('.val').childNodes.length
								? tableHead.classList.add('with_pinned')
								: tableHead.classList.remove('with_pinned')
						} else {
							// Удаление из сравнения
							validator.classList.remove('pinned')
						}

						// Скрытие ошибки сравнения
						compareError.style.display = 'none'
						compareError.classList.remove('animated')
					} else {
						// Превышен лимит
						e.preventDefault()

						// Показ ошибки сравнения
						compareError.style.display = 'flex'
					}
				}
			})
		})
	}


	// Удаление из сравнения
	document.addEventListener('click', e => {
		if (e.target.classList.contains('pinned_btn')) {
			// Удаление элемента
			e.target.remove()

			// Добавление класса шапке таблицы
			pinnedItems.querySelector('.val').childNodes.length
				? tableHead.classList.add('with_pinned')
				: tableHead.classList.remove('with_pinned')
		}
	})


	// Ошибка добавления в сравнение
	const compareErrorCloseBtn = document.querySelector('.compare_error .close_btn')

	if (compareErrorCloseBtn) {
		compareErrorCloseBtn.addEventListener('click', e => {
			e.preventDefault()

			// Скрытие ошибки сравнения
			compareError.style.display = 'none'
			compareError.classList.remove('animated')
		})
	}


	// Фильтр
	const filterBtns = document.querySelectorAll('.filter .mini_modal .btn')

	if (filterBtns) {
		filterBtns.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				let colName = el.getAttribute('data-col'),
					cols = document.querySelector('.rating').querySelectorAll(colName)

				if (!el.classList.contains('hide')) {
					el.classList.add('hide')

					// Скрываем колонку
					cols.forEach(col => col.style.display = 'none')
				} else {
					el.classList.remove('hide')

					// Показываем колонку
					cols.forEach(col => col.style.display = 'flex')
				}
			})
		})
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