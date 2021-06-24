/**
 * This is the root JS file. You can import other
 * JS files and create your program here. The 
 * compiled file will be found in the dist directory
 * in the root as main.min.js.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import StyleFlow from './style-flow'
import '../scss/index.scss';

/**
 * Calculate render sequence when iframeScope is ready.
 * 
 * This removes the need to use setTimeout's anytime I use an iframeScope call.
 */
 var iframeScopeReady = setInterval(() => {

    // Only load when iframeScope is an object
    if ( typeof $scope === 'object' && typeof $scope.iframeScope === 'object' ) {

        // Let others know it's EE
        jQuery('body').addClass('style-flow-active');

        // Do Style Flow
        RunStyleFlow();

        // Remove this timer.
        clearInterval(iframeScopeReady);
    }

}, 100);


/**
 * Run Style Flow when called.
 */
function RunStyleFlow() {

    console.log('You are running the standalone edition of Style Flow. For even more power, consider upgrading to the Editor Enhancer suite, which includes Style Flow!');

    jQuery('.oxygen-sidebar-tabs').append('<div id="style-flow"></div>');
    jQuery('.oxygen-global-settings').css({'z-index':'999999999'});

    ReactDOM.render(
        <React.StrictMode>
            <StyleFlow />
        </React.StrictMode>,
        document.getElementById('style-flow')
    );
}