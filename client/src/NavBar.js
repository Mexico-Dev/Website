import logo from "./logo.svg";

function NavBar() {
	return (
		<nav class="navbar navbar-expand-lg mb-5">
			<div class="container">
				<a class="navbar-brand" href="/">
					<img src={logo} alt="MexicoDev" height="32" />
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<i class="bi bi-list" />
				</button>
				<div
					class="collapse navbar-collapse justify-content-end"
					id="navbarNavAltMarkup"
				>
					<ul class="navbar-nav">
						<li class="nav-item">
							<a class="nav-link" href="/">
								<i class="bi bi-house-fill" /> Inicio
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/">
								<i class="bi bi-bookmark-fill" /> Cursos
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/">
								<i class="bi bi-play-circle-fill" /> Videos
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/">
								<i class="bi bi-calendar-event-fill" /> Eventos
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/">
								<i class="bi bi-briefcase-fill" /> Empleos
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/">
								<i class="bi bi-bag-fill" /> Tienda
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
