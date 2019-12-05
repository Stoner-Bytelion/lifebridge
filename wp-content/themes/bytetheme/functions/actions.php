<?php
	add_action("admin_menu", "add_new_menu_items");
	add_action("admin_init", "display_options");
	add_action('init', 'register_custom_menus');
	add_action('init', 'register_theme_blocks');
	add_action('wp_enqueue_scripts', 'queue_scripts', 100);
	add_action('enqueue_block_editor_assets', 'queue_editor_scripts');
	add_filter('render_block', 'filter_blocks', 10, 2);
	add_filter('block_categories', function($categories) {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'custom',
					'title' => 'Custom',
				),
			)
		);
	}, 10, 2);

	add_action('after_setup_theme', 'bytetheme_setup');
	add_action('after_setup_theme', 'add_custom_logo');
	add_action('after_setup_theme', 'disable_block_settings');
?>