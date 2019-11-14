var Gallery = (function() {
	var init = function() {
		setup();
	};

	var setup = function() {
		jQuery('.gallery_items').slick({
			dots: true,
			infinite: false,
  			adaptiveHeight: true
		});
	};

	return {
		init: init
	}
})();