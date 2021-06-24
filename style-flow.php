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

defined('ABSPATH')||exit('WP absolute path is not defined.');if(!function_exists('EditorEnhancer_Initializer')){if(!isset($EE_StyleFlow_Product_Arguments)){$EE_StyleFlow_Product_Arguments=['Website'=>'http://editorenhancer.com','Name'=>'Style Flow','ID'=>7269,'Version'=>'1.0.0'];}if(!isset($EE_StyleFlow_Admin_Arguments)){$EE_StyleFlow_Admin_Arguments=['Prefix'=>'eesf','Menu Title'=>'Style Flow','User Capability'=>'manage_options','Top Level Menu'=>false,'Parent Slug'=>'ct_dashboard_page','Menu Position'=>99,'Icon URL'=>'','License on Home'=>true,'Use Tabs'=>false,'Include System Info'=>true];}if(!isset($EE_StyleFlow_Validation_Arguments)){$EE_StyleFlow_Validation_Arguments=['Use Remote on Init'=>false,'Check Remote on Shutdown'=>false ];}if(!class_exists('EDD_SL_Quick_Plugin_Starter')){require_once 'licensing/setup.php';}global $EE_StyleFlow;$EE_StyleFlow=new EDD_SL_Quick_Plugin_Starter($EE_StyleFlow_Product_Arguments,$EE_StyleFlow_Admin_Arguments,$EE_StyleFlow_Validation_Arguments,__FILE__);function EE_StyleFlow_Initializer(){global $EE_StyleFlow;if($EE_StyleFlow->init()){require_once 'plugin/config.php';}}add_action('plugins_loaded','EE_StyleFlow_Initializer',999);}