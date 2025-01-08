import './output.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

window.addEventListener('resize', () => {
	location.reload()
})

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
if (window.innerWidth > 1024) {
	let sections = gsap.utils.toArray('.section')

	gsap.to(sections, {
		xPercent: -100 * (sections.length - 1),
		ease: 'none',
		scrollTrigger: {
			trigger: '.horizontal',
			pin: true,
			scrub: 1,
			snap: 1 / (sections.length - 1),
			// base vertical scrolling on how wide the container is so it feels more natural.
			end: '+=2500'
		}
	})
}

const menu = document.querySelector('#menu')
const close = document.querySelector('#close')
const dropdown = document.querySelector('#dropdown')
const body = document.querySelector('body')

menu.addEventListener('click', () => {
	menu.style.transform = 'translate(100%, 0)'
	dropdown.style.transition = 'transform 1s'
	dropdown.style.transform = 'translate(0, 0)'
	body.style.overflow = 'hidden'
})

close.addEventListener('click', () => {
	menu.style.transform = 'translate(0, 0)'
	dropdown.style.transition = 'transform 1s'
	dropdown.style.transform = 'translate(100%, 0)'
	body.style.overflowY = 'auto'
})

const book = document.querySelector('#book')

book.addEventListener('click', () => {
	var left = document.querySelector('#footer').offsetLeft
	gsap.to('html', { scrollTo: left, duration: 1.5 })
})
