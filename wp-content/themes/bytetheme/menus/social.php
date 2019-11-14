<?php
	$locations = get_nav_menu_locations();
	$menu = wp_get_nav_menu_object($locations['social_menu']);
	$items = wp_get_nav_menu_items($menu->term_id, array('order' => 'DESC'));
?>

<nav class="social_menu">
	<?php
		foreach ($items as $item) {
	?>
	<li class="social_menu_item">
		<a class="social_menu_link" href="<?=$item->url?>" target="_blank">
			<span class="social_menu_icon"><?php include(get_template_directory() . '/icons/' . $item->title . '.svg'); ?></span>
			<span class="social_menu_label"><?=$item->title?></span>
		</a>
	</li>
	<?php
		}
	?>
</nav>