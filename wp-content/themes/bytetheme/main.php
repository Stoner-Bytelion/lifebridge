<main class="page_main" id="page_main">
    <?php
        if (!is_front_page()) {
    ?>
    <div class="page_details_header">
        <div class="page_details_header_inner">
            <?php if (function_exists('yoast_breadcrumb')) {
                yoast_breadcrumb('<p id="breadcrumbs">','</p>');
            } ?>
            <h1 class="page_details_title"><?php the_title() ?></h1>
        </div>
    </div>
    <?php
        }

        while (have_posts()) {
            the_post();
    		the_content();
        }
    ?>
</main>