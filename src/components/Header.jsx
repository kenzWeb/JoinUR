export default function Header() {
	return (
		<header className='header'>
			<div className='header__container'>
				<div className='header__logo'>
					<img src='icons/logo.svg' alt='logo' />
				</div>
				<nav className='header__nav'>
					<ul className='header__nav-list'>
						<li className='header__nav-link'>
							<a href=''>Підбір тура</a>
						</li>
						<li className='header__nav-link'>
							<a href=''>спекотні тури</a>
						</li>
						<li className='header__nav-link'>
							<a href=''>країни</a>
						</li>
						<li className='header__nav-link'>
							<a href=''>готелі</a>
						</li>
					</ul>
				</nav>
				<button className='header__nav-button'>
					<h4>ЗАЛИШИТИ ЗАЯВКУ</h4>
				</button>
				<div className='header__nav-socials'>
					<img src='icons/location.svg' alt='location' />

					<img src='icons/call.svg' alt='call' />
				</div>
			</div>
		</header>
	)
}
