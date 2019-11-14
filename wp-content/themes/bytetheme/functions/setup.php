<?php
	if (!function_exists('bytetheme_setup')) {
        function bytetheme_setup() {
            register_nav_menus(
                array(
                    'main_menu' => 'Main Menu',
                    'social_menu' => 'Social Menu'
                )
            );

            add_action('init', 'register_my_menus');

            add_theme_support('post-formats',  array (
                'gallery',
                'quote',
                'image',
                'video'
            ));
        }
    }

    function add_custom_logo() {
        $defaults = array(
            'height' => 100,
            'width' => 200,
            'flex-height' => true,
            'flex-width' => true
        );

        add_theme_support('custom-logo', $defaults);
    }

    function queue_scripts() {
        wp_enqueue_style('style', get_stylesheet_uri());
        wp_enqueue_script('jquery');
        wp_enqueue_script(
            'script',
            get_template_directory_uri() . '/script.js',
            array(),
            time(),
            true
        );

        wp_dequeue_style('wp-block-library');
    }
?>