<?php
	/*
		filter_blocks:
			+ trims default wordpress classes
			+ scopes generic html blocks with a typography class
			+ wraps certain blocks in an extra classed div

		Edit the first array to scope blocks to the typography class
		Edit the second array to wrap blocks in an extra classed div
	*/
	function filter_blocks($block_content, $block) {
		if (empty(trim($block_content))) {
			return $block_content;
		}

		$title = str_replace('-', '_', sanitize_title($block['blockName']));
		$title = str_replace('core_', '', $title);

		if (empty($title)) {
			$title = 'freeform';
		}

		if (in_array($title, [
			'freeform',
			'html'
		])) {
			$title = $title . ' typography';
		}

		if (in_array(str_replace(' typography', '', $title), [
			'categories',
			'freeform',
			'html',
			'image',
			'separator',
			'table'
		])) {
			return sprintf(
				'<div class="%1$s">%2$s</div>',
				$title,
				$block_content
			);
		} else {
			return sprintf(
				'%2$s',
				$title,
				$block_content
			);
		}
	}

	function queue_editor_scripts() {
		wp_enqueue_script(
			'editor-script',
			get_template_directory_uri() . '/blocks/editor.js',
			array(
				'wp-blocks',
				'wp-dom'
			),
			time(),
			true
		);
	}

	function disable_block_settings() {
		add_theme_support('editor-color-palette');
		add_theme_support('disable-custom-colors');
		add_theme_support('disable-custom-font-sizes');
		add_theme_support('editor-font-sizes', array(
			array(
				'name' => 'Caption',
				'size' => 12,
				'slug' => 'caption'
			),
			array(
				'name' => 'Normal',
				'size' => 16,
				'slug' => 'normal'
			),
			array(
				'name' => 'Intro',
				'size' => 20,
				'slug' => 'intro'
			)
		));
	}
?>