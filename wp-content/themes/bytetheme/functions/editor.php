<?php
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
            'heading',
            'html',
            'list',
            'paragraph'
        ])) {
            $title = $title . ' typography';
        }

        if (in_array(str_replace(' typography', '', $title), [
            'categories',
            'code',
            'freeform',
            'heading',
            'html',
            'latest_posts',
            'list',
            'paragraph',
            'preformatted',
            'rss',
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