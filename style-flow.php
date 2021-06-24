<?php
/**
 * Style Flow
 *
 * @package           Style Flow
 * @author            Max Zimmer
 * @copyright         2021 Max Zimmer
 *
 * @editor-enhancer
 * Plugin Name:       EE Style Flow
 * Plugin URI:        https://editorenhancer.com
 * Description:       Take control of your style maintenance in Oxygen Builder.
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Max Zimmer
 * Author URI:        https://emzimmer.com
 * Text Domain:       ee-style-flow
 */

/**
 * Prevent direct access to the rest of the file.
 */
defined( 'ABSPATH' ) || exit( 'WP absolute path is not defined.' );

if ( ! function_exists( 'EditorEnhancer_Initializer' ) ) {
	/********************************************************************************
	*********************************************************************************

	Edit the options between the rows of hashtags (#'s). These are all that is needed
	to set up the EDD Software Licensing operations for this plugin, with an easy-to-
	use API. Begin building your plugin inside the "plugin" directory, starting with 
	the init.php file that has already been created.

	START EDITING!

	######################################################################*/

	// Don't forget to run a find-and-replace for "EE_StyleFlow" and update it everywhere.

	// MAKE SURE WP_DEBUG IS SET TO FALSE ON REMOTE SITE

	// Product arguments
	if ( ! isset( $EE_StyleFlow_Product_Arguments ) ) {

		$EE_StyleFlow_Product_Arguments = [
			'Website' => 'http://editorenhancer.com',		// Use HTTP protocol
			'Name'    => 'Style Flow',			// Use the EXACT title of your EDD product
			'ID'      => 7269,						// Your EDD product's Product ID
			'Version' => '1.0.0'					// Your EDD product's version number; increment this value every time you release an update
		];
	}

	// Admin setup arguments
	if ( ! isset( $EE_StyleFlow_Admin_Arguments ) ) {

		$EE_StyleFlow_Admin_Arguments = [
			'Prefix'            => 'eesf',			// Prefix is used for database calls. Keep it short.
			'Menu Title'         => 'Style Flow',			// The title for the menu item, wherever it is
			'User Capability'     => 'manage_options',	// The minimum privilege for users to view pages
			'Top Level Menu'      => false,				// Whether it's top level in the admin menu
			'Parent Slug'         => 'ct_dashboard_page',		// Only used if Top Level Menu is false
			'Menu Position'       => 99,				// Only useful if Top Level Menu is true
			'Icon URL'          => '',				// Not required. Custom icon URL. Will use a gear if null.
			'License on Home'     => true, 				// Whether to include the license input, activation, deactivation and other methods are below home.
			'Use Tabs'            => false,
			'Include System Info' => true
		];
	}

	// Validation arguments
	if ( ! isset( $EE_StyleFlow_Validation_Arguments ) ) {
		
		$EE_StyleFlow_Validation_Arguments = [
			'Use Remote on Init'       => false,				// Initialiize with remote license validation when plugin first loads
			'Check Remote on Shutdown' => false 			// Validate license on WP shutdown
		];
	}

	/**
	 * Advanced operations performed upon plugin activation, deactivation, and uninstallation.
	 *
	 * These are not necessary, and are left blank in case they need to be used.
	 */

	// Run when the plugin is activated
	// function EE_StyleFlow_Activation_Tasks() {

	// 	// Useful if the plugin adds custom post type
	// 	// flush_rewrite_rules();
	// }
	// register_activation_hook( __FILE__, 'EE_StyleFlow_Activation_Tasks' );

	// Run when the plugin is deactivated
	// function EE_StyleFlow_Deactivation_Tasks() {

	// 	// Useful if the plugin adds custom post type
	// 	// flush_rewrite_rules();
	// }
	// register_deactivation_hook( __FILE__, 'EE_StyleFlow_Deactivation_Tasks' );

	// Run when the plugin is uninstalled
	// function EE_StyleFlow_Uninstallation_Tasks() {}
	// register_uninstall_hook( __FILE__, 'EE_StyleFlow_Uninstallation_Tasks' );


	/*######################################################################

	STOP EDITING!

	All done! It's that simple.


	*********************************************************************************
	*********************************************************************************/


	/**
	 * Get and setup the licensing apparatus and admin helper.
	 */
	if ( ! class_exists( 'EDD_SL_Quick_Plugin_Starter' ) ) {
		require_once 'licensing/setup.php';
	}

	// Set the license starter as a global variable so it can be used elsewhere as well.
	// This is handy for creating new admin pages also.
	global $EE_StyleFlow;

	// Construct the license starter object.
	$EE_StyleFlow = new EDD_SL_Quick_Plugin_Starter(
		$EE_StyleFlow_Product_Arguments,
		$EE_StyleFlow_Admin_Arguments,
		$EE_StyleFlow_Validation_Arguments,
		__FILE__
	);


	/********************************************************************************
	 * Either the license is active and valid, and init returns true, or end the
	 * program. If true, get the init.php where the plugin itself can be built!
	 */
	function EE_StyleFlow_Initializer() {

		// Include the global license starter object
		global $EE_StyleFlow;

		// Initialize! (Or don't..).
		if ( $EE_StyleFlow->init() ) {
			require_once 'plugin/config.php';
		}
	}
	add_action( 'plugins_loaded', 'EE_StyleFlow_Initializer', 999 );
}