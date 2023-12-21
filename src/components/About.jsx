import Footer from './Footer'

export default function About() {
	return (
		<section className='about'>
			<div className='about__container'>
				<div className='about__header'>
					<div className='about__header-title'>про нас</div>
					<div className='about__header-subtitle'>
						надихаємо світ на пригоди
					</div>
				</div>
				<div className='about__content'>
					<div className='about__content-top'>
						<div className='about__content-top_left'>
							<h2 className='about__content-top_left-title'>ми</h2>
							<h2 className='about__content-top_left-subtitle'>
								Ми завжди готові допомогти Вам вибрати відпочинок на морі в
								будь-якій частині світу; гарячу путівку, в якій привабливе
								співвідношення ціна – якість поєднане з відмінним сервісом;
								екскурсійні тури, які надають можливість ознайомитись з
								декількома країнами; тур вихідного дня чи круїз; забронювати
								авіаквитки; організувати індивідуальну мандрівку найбільш
								вимогливому клієнту.
							</h2>
						</div>
						<div className='about__content-top_right'>
							<img
								className='about__content-top_right-img'
								src='img/about/1.jpg'
								alt='1'
							/>
						</div>
					</div>
					<div className='about__content-bottom'>
						<img
							className='about__content-bottom_img'
							src='img/about/2.jpg'
							alt='2'
						/>
					</div>
				</div>
			</div>
			<Footer />
		</section>
	)
}
