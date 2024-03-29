<div class="ee-main-content">
	<hr>
	<div class="issue-reporting-toggler">
		<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
		<h3 style="margin-top:35px;">Issue Reporting</h3>
	</div>

	<div class="issue-reporting-content">
		<h3>Information that helps me to help you</h3>
		<ul>
			<li>Description of the issue or error</li>
			<li>Steps to reproduce the issue or error</li>
			<li>Screenshots and recordings</li>
			<li>Error messages copied from your browser console</li>
			<li>Your website system information <em>(see below)</em></li>
		</ul>

		<h3>How to report an issue or bug</h3>
		<p>Visit the <a href="https://editorenhancer.com/issues" target="_blank">Issue Reporting</a> page on the Editor Enhancer website and include any details you can.</p>
	
		<h3>Your System Information</h3>
		<p>If you're experiencing issues, your system information could help diagnose them. This is provided here for your convenience. The data includes the names of your plugins and version numbers for those plugins, PHP, and WordPress. It also includes your settings for Editor Enhancer.</p>
		<!-- <button class="button copy-system-information">Copy to Clipboard</button> -->
		<div class="system-information">
			<strong>System Information</strong>
			<br><br>
			PHP Version: <?php echo phpversion(); ?>
			<br>
			WP Version: <?php echo get_bloginfo( 'version' ); ?>
			<br><br>
			<strong>Plugin Information</strong>
			<br><br>
			<?php

				foreach ( get_plugins() as $location => $plugin ) {

					$is_active = is_plugin_active( $location );

					$active_status = $is_active ? 'Active' : 'Not Active';

					echo 'Plugin Name: ' . $plugin['Name'] . '<br>';
					echo 'Status: ' . $active_status . '<br>';
					echo 'Version: ' . $plugin['Version'] . '<br>';
					echo 'Plugin Author: ' . $plugin['Author'] . '<br>';
					echo 'Author URI: ' . $plugin['AuthorURI'] . '<br><br>';
				}

			?>
		</div>
	</div>

</div>