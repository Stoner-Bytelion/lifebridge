var Menu = (function() {
	var init = function() {
		bindUI();
	};

	var bindUI = function() {
		document.querySelector('.page_menu_button').addEventListener('click', toggleMenu);
		document.querySelector('.page_menu_close').addEventListener('click', toggleMenu);
	};

	var toggleMenu = function() {
		document.querySelector('.page_menu').classList.toggle('visible');
	};

	return {
		init: init
	}
})();