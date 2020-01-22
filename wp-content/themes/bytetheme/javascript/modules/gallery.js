var Gallery = (function() {
	var items;
	var boxes;
	var box;
	var close;

	var init = function() {
		if (document.querySelector('.gallery_box_items')) {
			setup();
			bindUI();
		}
	};

	var setup = function() {
		items = document.querySelectorAll('.gallery_item');
		boxes = document.querySelectorAll('.gallery_box_item');
		box = document.querySelector('.gallery_box');
		close = document.querySelector('.gallery_box_close');

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
			items[x].addEventListener("click", openLightbox, false);
		}

		close.addEventListener("click", closeLightbox, false);
	}

	function openLightbox() {
		document.body.classList.add("gallery-active");

		box.prepend(boxes[this.getAttribute("data-index")]);

		box.classList.add("visible");

		for (var x = 0; x < boxes.length; x++) {
			boxes[x].classList.remove("active");
		}

		boxes[this.getAttribute("data-index")].classList.add("active");
	}

	function closeLightbox() {
		document.body.classList.remove("gallery-active");

		box.classList.remove("visible");

		for (var x = 0; x < boxes.length; x++) {
			boxes[x].classList.remove("active");
		}
	}

	return {
		init: init
	}
})();