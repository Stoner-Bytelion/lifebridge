            <footer class="page_footer">
                <div class="page_footer_inner">
                    <div class="page_footer_group">
                        <div class="meta">
                            <div class="meta_details">
                                <div class="meta_detail">
                                    <span class="meta_detail_icon"><?php icon('place'); ?></span>
                                    <a class="meta_detail_label meta_detail_link" href="" target="_blank" rel="noopener">
                                        <span class="meta_address_street" itemprop="streetAddress"><?=$site["address"]["street"]?></span>,
                                        <span class="meta_address_group">
                                            <span class="meta_address_city" itemprop="addressLocality"><?=$site["address"]["city"]?></span>,
                                            <span class="meta_address_state" itemprop="addressRegion"><?=$site["address"]["state"]?></span>
                                            <span class="meta_address_zip" itemprop="postalCode"><?=$site["address"]["zip"]?></span>
                                        </span>
                                    </a>
                                </div>
                                <div class="meta_detail">
                                    <span class="meta_detail_icon"><?php icon('mail'); ?></span>
                                    <a class="meta_detail_label meta_detail_link" href="mailto:{{ email }}" itemprop="email">Email: <?=$site["address"]["email"]?></pre></a>
                                </div>
                                <div class="meta_detail">
                                    <span class="meta_detail_icon"><?php icon('phone'); ?></span>
                                    <a class="meta_detail_label meta_detail_link" href="tel:{{ site.tel(phone) }}" itemprop="telephone">Phone: <?=$site["address"]["phone"]?></a>
                                </div>
                            </div>
                        </div>
                        <?php import('/menus/social.php'); ?>
                    </div>
                    <div class="page_footer_group">
                        <p class="copyright">&copy; Client <?=date("Y")?></p>
                    </div>
                </div>
                <div class="page_menu">
                    <div class="page_menu_inner">
                        <?php
                            wp_nav_menu(
                                array(
                                    'container_class' => 'main_menu main_menu_sm',
                                    'menu_class' => 'main_menu_list  main_menu_list_sm',
                                    'theme_location' => 'main_menu'
                                )
                            );
                        ?>
                        <button class="page_menu_close" aria-label="Toggle Menu">
                            <span class="page_menu_close_icon"><?php icon('close'); ?></span>
                            <span class="page_menu_close_label">Toggle Menu</span>
                        </button>
                    </div>
                </div>
            </footer>
        </div>
        <?php wp_footer(); ?>
    </body>
</html>