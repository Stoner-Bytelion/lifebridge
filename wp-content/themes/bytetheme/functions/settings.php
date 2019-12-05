<?php
    function add_new_menu_items() {
        add_menu_page(
            'Theme Options',
            'Theme Options',
            'manage_options',
            'theme-options',
            'theme_options_page',
            '',
            80
        );
    }

    function theme_options_page() {
?>
	<div class="wrap">
		<?php settings_errors(); ?>
		<h1>Theme Options</h1>
		<form method="post" action="options.php" enctype="multipart/form-data">
			<?php
				settings_fields('settings_section');
				do_settings_sections('theme-options');
				submit_button();
			?>
		</form>

	</div>
<?php
    }

    function display_options() {
        add_settings_section(
			'settings_section',
			'Custom Fields',
			'display_header',
			'theme-options'
		);

		$fields = array(
			array(
				'key' => 'street',
				'title' => 'Street',
				'function' => 'display_textarea'
			),
			array(
				'key' => 'city',
				'title' => 'City',
				'function' => 'display_input'
			),
			array(
				'key' => 'state',
				'title' => 'State',
				'function' => 'display_input'
			),
			array(
				'key' => 'zip',
				'title' => 'Zip',
				'function' => 'display_input'
			),
			array(
				'key' => 'email',
				'title' => 'Email',
				'function' => 'display_input'
			),
			array(
				'key' => 'phone',
				'title' => 'Phone',
				'function' => 'display_input'
			)
		);

		foreach ($fields as $field) {
			add_settings_field(
				$field['key'],
				$field['title'],
				$field['function'],
				'theme-options',
				'settings_section',
				array(
					$field['key'],
					$field['title']
				)
			);
			register_setting(
				'settings_section',
				$field['key']
			);
		}
    }

    function display_header() {
		echo 'Manage custom fields within your theme';
	}

	function display_input($args) {
?>
		<input type="text" name="<?=$args[0]?>" id="<?=$args[0]?>" value="<?=get_option($args[0]); ?>" size="40" />
<?php
	}

	function display_textarea($args) {
?>
		<textarea type="text" name="<?=$args[0]?>" id="<?=$args[0]?>" rows="7" cols="50"><?=get_option($args[0]); ?></textarea>
<?php
	}
?>