export default function componentStructuredData(base) {

    // Options shorthand
    const options = base.component.options[base.component.active.id]

    // Shorthand for oxygen classes object
    const oxyClasses = base.classes

    // Set styles for one of ID's breakpoints
    const idBreakpointStyles = (structuredDataCall, oxygenMediaCall) => {

        componentStyles.id[structuredDataCall] = options.media[oxygenMediaCall] == undefined ? false : {
            default: options.media[oxygenMediaCall].original == undefined ? false : options.media[oxygenMediaCall].original,
            hover: options.media[oxygenMediaCall].hover == undefined ? false : options.media[oxygenMediaCall].hover,
            before: options.media[oxygenMediaCall].before == undefined ? false : options.media[oxygenMediaCall].before,
            after: options.media[oxygenMediaCall].after == undefined ? false : options.media[oxygenMediaCall].after
        }
    }

    // Set styles for one of a class' breakpoints
    const classBreakpointStyles = (singleClass, structuredDataCall, oxygenMediaCall) => {

        componentStyles.classes[singleClass][structuredDataCall] = oxyClasses[singleClass].media[oxygenMediaCall] == undefined ? false : {
            default: oxyClasses[singleClass].media[oxygenMediaCall].original == undefined ? false : oxyClasses[singleClass].media[oxygenMediaCall].original,
            hover: oxyClasses[singleClass].media[oxygenMediaCall].hover == undefined ? false : oxyClasses[singleClass].media[oxygenMediaCall].hover,
            before: oxyClasses[singleClass].media[oxygenMediaCall].before == undefined ? false : oxyClasses[singleClass].media[oxygenMediaCall].before,
            after: oxyClasses[singleClass].media[oxygenMediaCall].after == undefined ? false : oxyClasses[singleClass].media[oxygenMediaCall].after
        }
    }

    /**
     * ID data
     */
    const componentStyles = {
        selector: options.selector,
        id: {
            screenWidth: {
                default: options.id != {} ? options.id : false
            }
        },
        classes: {}
    }

    // Add pseudos to id screenWidth dynamically
    if ( options.hover !== undefined ) {
        componentStyles.id.screenWidth.hover = options.hover
    }

    if ( options.before !== undefined ) {
        componentStyles.id.screenWidth.before = options.before
    }

    if ( options.after !== undefined ) {
        componentStyles.id.screenWidth.after = options.after
    }

    // Set other ID breakpoints dynamically
    if ( options.media !== undefined ) {

        idBreakpointStyles('pageWidth', 'page-width');
        idBreakpointStyles('tablet', 'tablet');
        idBreakpointStyles('phoneLandscape', 'phone-landscape');
        idBreakpointStyles('phonePortrait', 'phone-portrait');
    }

    /**
     * Classes data
     */
    const componentClasses = base.componentsClasses[base.component.active.id]

    // See if classes even exist and are not empty first
    if ( componentClasses != undefined && Object.keys(componentClasses).length > 0 ) {

        // Loop through the component's classes and copy data from Oxygen's classes object
        for ( var index in componentClasses ) {

            const singleClass = componentClasses[index]

            // Add the basic class data
            componentStyles.classes[singleClass] = {
                screenWidth: {
                    default: oxyClasses[singleClass].original != {} ? oxyClasses[singleClass].original : false
                }
            }

            // Add pseudos to id screenWidth dynamically
            if ( oxyClasses[singleClass].hover !== undefined ) {
                componentStyles.classes[singleClass].screenWidth.hover = oxyClasses[singleClass].hover
            }

            if ( oxyClasses[singleClass].before !== undefined ) {
                componentStyles.classes[singleClass].screenWidth.before = oxyClasses[singleClass].before
            }

            if ( oxyClasses[singleClass].after !== undefined ) {
                componentStyles.classes[singleClass].screenWidth.after = oxyClasses[singleClass].after
            }

            // Set other breakpoint styles dynamically
            if ( oxyClasses[singleClass].media != undefined ) {
                
                classBreakpointStyles(singleClass, 'pageWidth', 'page-width')
                classBreakpointStyles(singleClass, 'tablet', 'tablet')
                classBreakpointStyles(singleClass, 'phoneLandscape', 'phone-landscape')
                classBreakpointStyles(singleClass, 'phonePortrait', 'phone-portrait')
            }

            // Or, if no breakpoint styles exist, set them all to false
            else {
                componentStyles.classes[singleClass].pageWidth = false
                componentStyles.classes[singleClass].tablet = false
                componentStyles.classes[singleClass].phoneLandscape = false
                componentStyles.classes[singleClass].phonePortrait = false
            }
        }
    }

    return componentStyles;
}