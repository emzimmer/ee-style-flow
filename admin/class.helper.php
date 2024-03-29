<?php
/**
 * Prevent direct access to the rest of the file.
 */
defined( 'ABSPATH' ) || exit( 'WP absolute path is not defined.' );


/**
 * The admin helper.
 */
class EDD_SL_Quick_Plugin_Starter_Admin_Helper {


	public function __construct( $prefix, $capability ) {

		$this->prefix     = $prefix;
		$this->home_slug  = $prefix . '_home';
		
		$this->capability = $capability;
	}


	/**
	 * Register a submenu page
	 */
	public function register_page( $title, $slug, $callback, $register_setting = true ) {

		$define_slug = $slug === $this->home_slug ? $this->home_slug : $this->_do_slug( $slug );

		add_submenu_page(
			$this->home_slug,
			$title,
			$title,
			$this->capability,
			$define_slug,
			$callback
		);

		if ( $register_setting ) {
			register_setting( $define_slug, $define_slug );
		}
	}


	/**
	 * Register a section
	 */
	public function register_section( $page_slug, $section_title, $section_slug ) {

		add_settings_section( 
			$this->_do_slug( $section_slug ),
			$section_title,
			[ $this, 'gratuitous_section_callback' ],
			$this->_do_slug( $page_slug )
		);
	}


	/**
	 * Register a field
	 */
	public function register_field( $page_slug, $section_slug, $field_slug, $field_title, $field_type, $args = [] ) {

		add_settings_field(
			$field_slug,
			$field_title,
			[ $this, $field_type . '_callback' ],
			$this->_do_slug( $page_slug ),
			$this->_do_slug( $section_slug ),
			$args
		);
	}


	/**
	 * Checkbox field callback.
	 */
	public function checkbox_callback( $args ) {

	}


	/**
	 * Select field callback.
	 */
	public function select_callback( $args ) {

	}


	/**
	 * Text field callback.
	 */
	public function text_callback( $args ) {

	}


	/**
	 * Description output for callbacks.
	 */
	public function field_decription( $args ) {

	}


	/**
	 * Return a page slug.
	 */
	private function _do_slug( $slug ) {

		return $this->prefix . '_' . $slug;
	}

}// End of class
