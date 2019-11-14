<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'lifebridge' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'm%qDw(aFz;}DM(K$mfzBv ppY7R%`Jy$OJ3n.1EJPec;[FV7Kn96>iBl39~WBEpA' );
define( 'SECURE_AUTH_KEY',  'kLI5e;co@PY)u-4S3m<rh^^&&m3dV.{$YKEP&nHUM?6 NU+MyQowBR2-+Quf#X$j' );
define( 'LOGGED_IN_KEY',    ', kr<dJA^ 4W=m^>ulUsHQ[[]b,h*(}GN;IY(4E-9hzv]B8%Nr+%3j0V3g[0V:y?' );
define( 'NONCE_KEY',        ' ~c1pQWa2?a8pL<SHzzI@=Fh9P(AfLP xdcBdO8<t,wmS]E9OX:D0?X+N-f-Jx9g' );
define( 'AUTH_SALT',        'gjD:bR] w=%U:6Gcg_`xANlOKG`8*U6^%IbVoNSY_fSig.mqWkl[C~tckr)_?$eQ' );
define( 'SECURE_AUTH_SALT', '3Sk z;-=M~jQKY}2JON0naL%0WMY$[pDx[XG-pA/G/F-{%sqjyNuF_)A?LBYD]Zm' );
define( 'LOGGED_IN_SALT',   'v>/XF0)f]wo^>FY6c8#Y3}B~wS%*Xob2RI5v*WY [ou+41LILVBVmj5`flZcye0y' );
define( 'NONCE_SALT',       '8l)kh77wF5p?<cME,)o&U51X|~a<FJ/[[`l}Rr~$AnN#kFMgwHOO0u`X.T22<4!$' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
