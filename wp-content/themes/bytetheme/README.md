# Bytelion Wordpress Theme

This repo provides a skeleton set of blocks and styles built around the gutenberg editor. As a rule of thumb, all blocks are full-width and able to be placed on any page.

## Getting Started

Since this is a gulp based workflow, you'll need a little extra work to manage custom blocks and styles. Open a terminal in the current bytetheme directory:

```
npm install gulp-cli -g
npm install
gulp
```

## Folder Structure

### /blocks

Contains all custom gutenberg blocks for your theme within /src plus 2 extra helper files.
* **editor.css**: ensures a usable block editing experience.
* **editor.js**: removes default gutenberg style options and blacklists blocks.

**Do not to edit within the /dist folder!**

### /functions

Represents functions.php albeit broken up into managable files.
* **actions.php**: queues actions for wordpress to load based on all other php function files.
* **blocks.php**: registers custom gutenberg blocks for your theme.
* **editor.php**: customizes the editor to better fit bytetheme.
* **setup.php**: queues menus, scripts, and adds custom logo support.

### /icons

SVG icons to be directly embedded within your theme.\
`<?php icon('icon-name'); ?>`

### /javascript

Source javascript files for your theme.\
_These will be compiled into script.js._
* **/modules**: contains custom modules for your theme.
* **/vendor**: contains any third party plugins.
* **zero.js**: file to initialize modules in the order you want.

### /menus

PHP menus to use within your theme.\
`<?php import('/menus/social.php'); ?>`

### /sass

Source sass files to style your theme.\
_These will be compiled into style.css._

## Additional Support

### Breadcrumbs

The easiest way to add breadcrumbs to your site is to add the Yoast SEO plugin. Go to the SEO panel within the admin site then select "Search Appearance" >> "Breadcrumbs" >> and enable breadcrumbs there. There's a conditional within main.php that will then include breadcrumbs for you.

### Contact Form 7

Contact Form 7 by default does not contain a gutenberg block. For support add https://github.com/andreilupu/cf7-gutenberg into the plugins folder. When editing a page, Contact Form 7 will then appear as a dropdown within the "Common Blocks" category.