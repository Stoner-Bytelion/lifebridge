<?php
	$locations = get_nav_menu_locations();
	$menu = wp_get_nav_menu_object($locations['main_menu']);
	$items = wp_get_nav_menu_items($menu->term_id, array('order' => 'DESC'));
?>

<pre style="color: #fff"><?=var_dump($items)?></pre>

<nav class="main_menu">
	<?php
		foreach ($items as $item) {
	?>
	<li class="main_menu_item">
		<a class="main_menu_link" href="<?=$item->url?>">
			<span class="main_menu_label"><?=$item->title?></span>
		</a>
	</li>
	<?php
		}
	?>
</nav>