<?php

/**
 * Prevent direct access to the rest of the file.
 */
defined( 'ABSPATH' ) || exit( 'WP absolute path is not defined.' );


/**
 * Plugin Directories with Trailing Slashes
 */
global $EE_StyleFlow;
define( 'EESF_PLUGIN_DIR', $EE_StyleFlow->get_plugin_root() . 'plugin/' );
define( 'EESF_PLUGIN_URL', $EE_StyleFlow->get_plugin_root_url() . 'plugin/' );

// dist
define( 'EESF_DIST', EESF_PLUGIN_DIR . 'dist/' );
define( 'EESF_DIST_URL', EESF_PLUGIN_URL . 'dist/' );


/**
 * Enqueue styles and scripts with cached version control
 */
function enqueue_style_flow() {

	global $EE_StyleFlow;

	$url = EESF_DIST_URL . 'style-flow.js';
	$version = $EE_StyleFlow->get_product_info( 'version' );

	wp_enqueue_script( 'style-flow', $url, [], $version, true );
}

// Run builder stuff
if ( isset( $_GET['ct_builder'] ) && true == $_GET['ct_builder'] && ! isset( $_GET['oxygen_iframe'] ) ) {
	add_action( 'wp_enqueue_scripts', 'enqueue_style_flow' );
}