export default function Home() {
	return (
		<section className='home'>
			<div className='home__container'>
				<h2 className='home__title'>
					МАНДРІВКА <br /> МРІЇ
				</h2>

				<div className='home__menu'>
					<div className='home__menu-card'>
						<h2 className='home__menu-card_title'>Звідки</h2>
						<h2 className='home__menu-card_info'>україна</h2>
					</div>
					<div className='home__menu-card'>
						<h2 className='home__menu-card_title'>КУди</h2>
						<h2 className='home__menu-card_info'></h2>
					</div>
					<div className='home__menu-card'>
						<h2 className='home__menu-card_title'>політ</h2>
						<h2 className='home__menu-card_info'></h2>
					</div>
					<div className='home__menu-card'>
						<h2 className='home__menu-card_title'>На скільки</h2>
						<h2 className='home__menu-card_info'>9 - 12 ночі</h2>
					</div>
					<div className='home__menu-card'>
						<h2 className='home__menu-card_title'>Туристи</h2>
						<h2 className='home__menu-card_info'>2 + 0</h2>
					</div>
					<button className='home__menu-button'>
						<h2>підібрати</h2>
					</button>
				</div>
			</div>
		</section>
	)
}
