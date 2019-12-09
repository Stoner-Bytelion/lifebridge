<?php include(get_template_directory() . '/config.php'); ?>
<?php include(get_template_directory() . '/utility.php'); ?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <title><?php wp_title( '| Lifebridge Health', true, 'right' ); ?></title>
        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>
        <div class="page">
            <header class="page_header">
                <a class="page_skip" href="#page_main">Skip to Content</a>
                <div class="page_header_inner">
                    <div class="page_header_group">
                        <?php the_custom_logo(); ?>
                    </div>
                    <div class="page_header_group">
                        <?php
                            wp_nav_menu(
                                array(
                                    'theme_location' => 'main_menu',
                                    'container' => 'ul',
                                    'container_class' => 'main_menu main_menu_lg',
                                    'menu_class' => 'main_menu_list main_menu_list_lg'
                                )
                            );
                        ?>
                        <a class="page_header_link" href="https://nextbigthinginhealthcare.com/#contact">
                            <span class="page_header_link_label">Apply Now</span>
                            <span class="page_header_link_icon"><?php icon('arrow_right'); ?></span>
                        </a>
                    </div>
                    <button class="page_menu_button" aria-label="Toggle Menu">
                        <span class="page_menu_button_icon"></span>
                        <span class="page_menu_button_label">Toggle Menu</span>
                    </button>
                </div>
            </header>