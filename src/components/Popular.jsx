export default function Popular() {
	return (
		<section className='popular'>
			<div className='popular__cont'>
				<div className='popular__header'>
					<h2>популярні готелі</h2>
				</div>
				<div className='popular__content'>
					<div className='popular__content-card'>
						<img src='img/popular/1.jpg' alt='1' />
						<h3>Ritz-Carlton</h3>
					</div>
					<div className='popular__content-card'>
						<img src='img/popular/2.jpg' alt='2' />
						<h3>Villa Flori Como</h3>
					</div>
					<div className='popular__content-card'>
						<img src='img/popular/3.jpg' alt='3' />
						<h3>Ikos Dassia</h3>
					</div>
				</div>
			</div>
		</section>
	)
}
