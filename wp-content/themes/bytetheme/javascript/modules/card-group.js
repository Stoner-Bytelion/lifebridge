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
					breakpoint: 1220,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 740,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 500,
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