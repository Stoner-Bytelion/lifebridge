var CardGroup = (function() {
	var init = function() {
		setup();
	};

	var setup = function() {
		jQuery('.card_group_items').slick({
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

	return {
		init: init
	}
})();