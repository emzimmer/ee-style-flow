import React, { useState } from 'react'
// import { componentStructuredData } from '../../component-structured-data'

export default function Style(props) {

    const [isAlive, setStatus] = useState(true)
    //const [hasLink, setLinking] = useState(true)
    
    const selector = props.pathway.selector
    const breakpoint = props.pathway.breakpoint
    const pseudo = props.pathway.pseudo

    const goToPanel = style => {

        // Close the dialogue
        props.setVisibility(false)

        // Switch to correct selector


        // Switch to selector
        if ( selector.type == 'id' ) {

            $scope.iframeScope.switchEditToId(true);
        }

        // Type is class
        else {

            $scope.iframeScope.setCurrentClass(selector.name);
        }


        // Switch to appropriate media screen width
        const breakpointName = breakpoint.name == 'original' ? 'default' : breakpoint.name
        $scope.iframeScope.setCurrentMedia( breakpointName, true, $scope.iframeScope.isEditing('class') );

        // Switch to appropriate pseudo
        // I guess this always needs to happen, sooo...
        $scope.iframeScope.switchState('original');
        if ( pseudo.name !== 'default' ) {
            $scope.iframeScope.switchState( pseudo.name );
        }

        switch ( style ) {

            // Background
            case 'background-color' :
            case 'gradient' :
            case 'background-image' :
            case 'background-imagedynamic':
            case 'alt' :
            case 'overlay-color' :
            case 'background-size' :
            case 'background-repeat' :
            case 'background-attachment' :
            case 'background-position-left' :
            case 'background-position-top' :
            case 'background-position-left-unit' :
            case 'background-position-top-unit' :
            case 'background-clip' :
            case 'background-blend-mode' :
            case 'video_background_hide' :
            case 'video_background_overlay' :
                $scope.showAllStylesFunc();
                $scope.styleTabAdvance=true;
                $scope.switchTab('advanced','background');
                break;

            // Sizing & Spacing
            case 'container-padding-top' :
            case 'container-padding-left' :
            case 'container-padding-right' :
            case 'container-padding-bottom' :
            case 'margin-top':
            case 'margin-right':
            case 'margin-bottom':
            case 'margin-left':
            case 'padding-top':
            case 'padding-right':
            case 'padding-bottom':
            case 'padding-left':
            case 'width' :
            case 'min-width' :
            case 'max-width' :
            case 'height' :
            case 'min-height' :
            case 'max-height' :
            case 'section-width' :
            case 'custom-width' :
            case 'custom-width-unit' :
            case 'max-height-unit' :
            case 'min-height-unit' :
            case 'height-unit' :
            case 'max-width-unit' :
            case 'min-width-unit' :
            case 'width-unit' :
            case 'container-padding-left-unit' :
            case 'container-padding-top-unit' :
            case 'container-padding-right-unit' :
            case 'container-padding-bottom-unit' :
                $scope.showAllStylesFunc();
                $scope.styleTabAdvance=true;
                $scope.switchTab('advanced','position');
                break;

            // Layout
            case 'display' :
            case 'flex-direction' :
            case 'flex-reverse' :
            case 'align-items' :
            case 'justify-content' :
            case 'flex-wrap' :
            case 'align-content' :
            case 'float' :
            case 'overflow' :
            case 'clear' :
            case 'visibility' :
            case 'z-index' :
            case 'position' :
            case 'top' :
            case 'left' :
            case 'right' :
            case 'bottom' :
            case 'align-self':
            case 'order':
            case 'flex-grow':
            case 'flex-shrink':
                $scope.showAllStylesFunc();
                $scope.styleTabAdvance=true;
                $scope.switchTab('advanced','layout');
                break;

            // Typography
            case 'font-family' :
            case 'font-size-unit' :
            case 'font-size' :
            case 'color' :
            case 'font-weight' :
            case 'text-align' :
            case 'line-height' :
            case 'letter-spacing-unit' :
            case 'letter-spacing' :
            case 'text-decoration' :
            case 'font-style' :
            case 'text-transform' :
            case '-webkit-font-smoothing' :
                $scope.showAllStylesFunc();
                $scope.styleTabAdvance=true;
                $scope.switchTab('advanced','typography');
                break;

            // Borders
            case 'border-all-color' :
            case 'border-all-width' :
            case 'border-all-style' :
            case 'border-all-width-unit' :
            case 'border-top-color' :
            case 'border-top-width' :
            case 'border-top-style' :
            case 'border-top-width-unit' :
            case 'border-right-color' :
            case 'border-right-width' :
            case 'border-right-style' :
            case 'border-right-width-unit' :
            case 'border-bottom-color' :
            case 'border-bottom-width' :
            case 'border-bottom-style' :
            case 'border-bottom-width-unit' :
            case 'border-left-color' :
            case 'border-left-width' :
            case 'border-left-style' :
            case 'border-left-width-unit' :
            case 'border-radius' :
            case 'border-radius-unit' :
            case 'border-top-left-radius' :
            case 'border-top-left-radius-unit' :
            case 'border-top-right-radius' :
            case 'border-top-right-radius-unit' :
            case 'border-bottom-right-radius' :
            case 'border-bottom-right-radius-unit' :
            case 'border-bottom-left-radius' :
            case 'border-bottom-left-radius-unit' :
                $scope.showAllStylesFunc();
                $scope.styleTabAdvance=true;
                $scope.switchTab('advanced','borders');
                break;

            // Effects
            case 'aos-enable' :
            case 'aos-type' :
            case 'aos-duration' :
            case 'aos-anchor-placement' :
            case 'aos-easing' :
            case 'aos-offset' :
            case 'aos-delay' :
            case 'aos-anchor' :
            case 'aos-once' :
            case 'opacity' :
            case 'mix-blend-mode' :
            case 'transition-duration' :
            case 'transition-timing-function' :
            case 'transition-property' :
            case 'transition-delay' :
            case 'box-shadow-inset' :
            case 'box-shadow-color' :
            case 'box-shadow-horizontal-offset' :
            case 'box-shadow-vertical-offset' :
            case 'box-shadow-blur' :
            case 'box-shadow-spread' :
            case 'text-shadow-color' :
            case 'text-shadow-horizontal-offset' :
            case 'text-shadow-vertical-offset' :
            case 'text-shadow-blur' :
            case 'filter' :
            case 'filter-amount-blur' :
            case 'transform' :
                $scope.showAllStylesFunc();
                $scope.styleTabAdvance=true;
                $scope.switchTab('advanced','effects');
                break;

            // Go to the primary tab
            default:
                $scope.styleTabAdvance=false;
                $scope.closeTabs([
                    'oxy_posts_grid',
                    'dynamicList',
                    'slider',
                    'navMenu',
                    'effects',
                    'gallery',
                    'oxy_header',
                    'oxy_testimonial',
                    'oxy_icon_box',
                    'oxy_pricing_box',
                    'oxy_progress_bar',
                    'oxy_superbox',
                    'ct_modal',
                    'oxy-pro-menu'
                ]);
                $scope.toggleSidebar(true)
        }
    }

    const removeStyle = () => {

        if ( selector.type == 'class' ) {
            
            const pseudoName = pseudo.name == 'default' ? 'original' : pseudo.name

            if ( breakpoint.type == 'screenWidth' ) {
                delete $scope.iframeScope.classes[selector.name][pseudoName][props.styleName]
            }

            else {
                delete $scope.iframeScope.classes[selector.name].media[breakpoint.name][pseudoName][props.styleName]
            }
        }

        else if ( selector.type == 'id' ) {

            if ( breakpoint.type == 'screenWidth' ) {
                const pseudoName = pseudo.name == 'default' ? 'id' : pseudo.name
                delete $scope.iframeScope.component.options[$scope.iframeScope.component.active.id][pseudoName][props.styleName]
                
                if ( pseudoName == 'id' ) {
                    delete $scope.iframeScope.component.options[$scope.iframeScope.component.active.id]['original'][props.styleName]
                    delete $scope.iframeScope.component.options[$scope.iframeScope.component.active.id]['model'][props.styleName]
                }
            }
            
            else {
                const pseudoName = pseudo.name == 'default' ? 'original' : pseudo.name
                delete $scope.iframeScope.component.options[$scope.iframeScope.component.active.id].media[breakpoint.name][pseudoName][props.styleName]
            }
        }

        /**
         * The following functions are derived from controller.undeoredo.js in the restoreData function
         */

        // update cache
        $scope.iframeScope.classesCached = false;
        $scope.iframeScope.updateAllComponentsCacheStyles();

        // output CSS
        $scope.iframeScope.outputCSSOptions();
        $scope.iframeScope.outputPageSettingsCSS();

        /**
         * The following functions are derived from most input actions
         */
        $scope.iframeScope.setOption($scope.iframeScope.component.active.id, $scope.iframeScope.component.active.name, props.styleName)
        $scope.iframeScope.checkResizeBoxOptions(props.styleName)

        setStatus(false)
    }

    const restoreStyle = () => {

        if ( selector.type == 'class' ) {
            
            const pseudoName = pseudo.name == 'default' ? 'original' : pseudo.name

            if ( breakpoint.type == 'screenWidth' ) {
                $scope.iframeScope.classes[selector.name][pseudoName][props.styleName] = props.styleValue
            }

            else {
                $scope.iframeScope.classes[selector.name].media[breakpoint.name][pseudoName][props.styleName] = props.styleValue
            }
        }

        else if ( selector.type == 'id' ) {

            if ( breakpoint.type == 'screenWidth' ) {
                const pseudoName = pseudo.name == 'default' ? 'id' : pseudo.name
                $scope.iframeScope.component.options[$scope.iframeScope.component.active.id][pseudoName][props.styleName] = props.styleValue

                if ( pseudoName == 'id' ) {
                    $scope.iframeScope.component.options[$scope.iframeScope.component.active.id]['original'][props.styleName] = props.styleValue
                    $scope.iframeScope.component.options[$scope.iframeScope.component.active.id]['model'][props.styleName] = props.styleValue
                }
            }
            
            else {
                const pseudoName = pseudo.name == 'default' ? 'original' : pseudo.name
                $scope.iframeScope.component.options[$scope.iframeScope.component.active.id].media[breakpoint.name][pseudoName][props.styleName] = props.styleValue
            }
        }

         /**
         * The following functions are derived from controller.undeoredo.js in the restoreData function
         */

        // update cache
        $scope.iframeScope.classesCached = false;
        $scope.iframeScope.updateAllComponentsCacheStyles();

        // output CSS
        $scope.iframeScope.outputCSSOptions();
        $scope.iframeScope.outputPageSettingsCSS();

        /**
         * The following functions are derived from most input actions
         */
        $scope.iframeScope.setOption($scope.iframeScope.component.active.id, $scope.iframeScope.component.active.name, props.styleName)
        $scope.iframeScope.checkResizeBoxOptions(props.styleName)

        setStatus(true)
    }

    let styleWrapClass = 'sf-state__style' + (! isAlive ? ' can-restore' : '')

    return (
        <div className={styleWrapClass}>
            <div className='sf-state-style__name'>
                <span onClick={() => goToPanel(props.styleName)}>{props.styleName}:</span>&nbsp;
                <span>{typeof props.styleValue != 'object' ? props.styleValue : 'object'}</span>
            </div>
            {isAlive ? <i className='sf-state-style__trash fa fa-trash' onClick={removeStyle}></i> : null}
            {!isAlive ? <i className='sf-state-style__restore fa fa-arrow-up' onClick={restoreStyle}></i> : null}
        </div>
    )
}