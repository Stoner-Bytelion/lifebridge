var News = (function() {
	var init = function() {
		setup();
	};

	var setup = function() {
		jQuery('.news_items').slick({
			dots: true,
			infinite: false,
			adaptiveHeight: true,
			slidesToShow: 3,
			responsive: [
				{
					breakpoint: 800,
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

	return {
		init: init
	}
})();