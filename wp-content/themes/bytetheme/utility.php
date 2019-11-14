<?php
	function import($path) {
		include(get_template_directory() . $path);
	}

	function icon($name) {
		include(get_template_directory() . '/icons/' . $name . '.svg');
	}
?>