            <footer class="page_footer">
                <div class="page_footer_inner">
                    <a class="page_header_link" href="https://nextbigthinginhealthcare.com/#contact">
                        <span class="page_header_link_label">Stay Connected</span>
                        <span class="page_header_link_icon"><?php icon('arrow_right'); ?></span>
                    </a>
                    <div class="credit">
                        <p>Serving Maryland, the District of Columbia and portions of Virginia, CareFirst BlueCross BlueShield is the shared business name of CareFirst of Maryland, Inc. and Group Hospitalization and Medical Services, Inc. In the District of Columbia and Maryland, CareFirst MedPlus is the business name of First Care, Inc. In Virginia, CareFirst MedPlus is the business name of First Care, Inc. of Maryland (Used in VA by: First Care, Inc.). First Care, Inc., CareFirst of Maryland, Inc., Group Hospitalization and Medical Services, Inc., CareFirst BlueChoice, Inc. and The Dental Network are independent licensees of the Blue Cross and Blue Shield Association. The Blue Cross® and Blue Shield® and the Cross and Shield Symbols are registered service marks of the Blue Cross and Blue Shield Association, an association of independent Blue Cross and Blue Shield Plans.</p>
                        <p>CareFirst of Maryland, Inc. and The Dental Network underwrite products in Maryland only.</p>
                    </div>
                    <div class="copyright">&copy; CareFirst LifeBridge Innovation Center <?=date("Y")?> | All Rights Reserved | <a href="https://member.carefirst.com/members/mandates-policies/cookie-policy.page" target="_blank">CareFirst Privacy Policy</a> | <a href="http://www.lifebridgehealth.org/Main/TermsofUseandPrivacyPolicy.aspx" target="_blank">LifeBridge Privacy Policy</a></div>
                </div>
                <div class="page_menu">
                    <div class="page_menu_inner">
                        <?php
                            wp_nav_menu(
                                array(
                                    'container' => 'ul',
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