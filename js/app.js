const tl = gsap.timeline({
	defaults: { duration: 0.75, ease: 'Power3.easeOut' },
})
tl.fromTo(
	'.hero__img',
	{ scale: 1.3, borderRadius: '0rem' },
	{
		scale: 1,
		borderRadius: '2rem',
		delay: 0.35,
		duration: 2.5,
		ease: 'elastic.out(1.5,1)', //1s - drop 1.5s - up
	},
)
tl.fromTo('.cta__text-1', { x: '100%' }, { x: 0 }, '<20%')
// animation
// ( element, начальные стили для анимации, стили по окончанию анимации, преждевременный старт
//    (
//       по умолчанию следующая анимация стартует после предыдущей, но можно отсрочить это время
//       '<' - старт вместе с предыдущей анимацией
//       '<20%' - старт после 20% выполнения предыдущей анимации
//    )
// )
tl.fromTo('.cta__text-3', { x: '-100%' }, { x: 0 }, '<20%')
tl.fromTo('.cta__text-2', { y: '100%' }, { y: 0 }, '<20%')

tl.fromTo('.cta__text-4', { x: '100%' }, { x: 0 }, '<20%')
tl.fromTo('.cta__text-6', { x: '-100%' }, { x: 0 }, '<20%')
tl.fromTo('.cta__text-5', { y: '-100%' }, { y: 0 }, '<20%')
tl.fromTo('.cta__btn', { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, '<')

//Split text alternative
const logo = document.querySelector('.logo'),
	letters = logo.textContent.split('')

logo.textContent = ''

letters.forEach((letter) => {
	const inLetter = document.createElement('span')
	inLetter.textContent = letter
	inLetter.classList.add('letter')
	logo.append(inLetter)
})

gsap.set('.letter', { display: 'inline-block' }) //Установка стилей на елемент

gsap.fromTo(
	'.letter',
	{ y: '100%' },
	{ y: 0, delay: 2, stagger: 0.05, ease: 'back.out(3)' },
)
//Анимация на группу елементов - всем .letter будет присвоена одна анимация
// stagger - задержка анимации между елементами группы
