<?php
	function register_theme_blocks() {
        wp_register_style(
            'editor',
            get_template_directory_uri() . '/blocks/editor.css',
            array('wp-edit-blocks'),
            time()
        );

        $blocks = array(
            'accordion-block',
            'call-to-action',
            'card-group',
            'contact',
            'cover',
            'news',
            'gallery',
            'link-group',
            'topic-row',
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
    }
?>