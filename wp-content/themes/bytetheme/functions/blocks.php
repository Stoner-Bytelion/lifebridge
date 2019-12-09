<?php
	/*
		Edit the $blocks array below to add or remove blocks within gutenberg.
		The string added to the array must match the file name within /blocks/src/.
	*/
	function register_theme_blocks() {
		$blocks = array(
			'background-callout',
			'call-to-action',
			'card-grid',
			'card-group',
			'cover',
			'events',
			'gallery',
			'intro-callout',
			'intro-first',
			'intro-last',
			'intro-large',
			'news',
			'link-group',
			'logo-callout',
			'three-pair',
			'topic-row',
			'quotes',
		);

		foreach ($blocks as $block) {
			wp_register_script(
				$block,
				get_template_directory_uri() . '/blocks/dist/' . $block . '.js',
				array(
					'wp-blocks',
					'wp-components',
					'wp-element',
					'wp-editor'
				),
				time()
			);

			register_block_type('bytetheme/' . $block, array(
				'editor_style' => 'editor',
				'editor_script' => $block,
			));
		}

		wp_register_style(
			'editor',
			get_template_directory_uri() . '/blocks/editor.css',
			array('wp-edit-blocks'),
			time()
		);
	}
?>