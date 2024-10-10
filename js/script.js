function toggleMenu() {
	const menu = document.getElementById('menu');
	if (menu.style.display === 'flex') {
		menu.style.display = 'none';
	} else {
		menu.style.display = 'flex';
	}
}

document.addEventListener('DOMContentLoaded', function () {
	var buttons = document.querySelectorAll('.menu-link');

	buttons.forEach(function (button) {
		button.addEventListener('click', function (event) {
			// Prevent the default link behavior
			event.preventDefault();

			// Remove highlight from all buttons
			buttons.forEach(function (btn) {
				btn.style.backgroundColor = '';
				btn.style.color = '';
			});

			// Highlight the clicked button
			event.target.style.backgroundColor = 'black';
			event.target.style.borderRadius = '22px';
			event.target.style.color = 'white';
		});
	});
});

// Button arrow-down scroll
document.querySelectorAll('.scrollButton').forEach((button) => {
	button.addEventListener('click', function () {
		window.scrollBy({
			top: window.innerHeight,
			behavior: 'smooth',
		});
	});
});
