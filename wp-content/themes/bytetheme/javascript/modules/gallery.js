var Gallery = (function() {
	var items;
	var boxes;

	var init = function() {
		setup();
		bindUI();
	};

	var setup = function() {
		items = document.querySelectorAll('.gallery_item');
		boxes = document.querySelectorAll('.gallery_box_item');

		jQuery('.gallery_items').slick({
			dots: true,
			infinite: false,
			adaptiveHeight: true,
			slidesToShow: 4,
			responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 880,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1
				}
			}
		]
		});
	};

	function bindUI() {
		for (var x = 0; x < items.length; x++) {
			items[i].addEventListener("click", openLightbox, false);
		}
	}

	function openLightbox() {}

	return {
		init: init
	}
})();