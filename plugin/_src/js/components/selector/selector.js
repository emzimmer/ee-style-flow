import React, { useState } from 'react'
import MediaBreakpoint from '../media-breakpoint'

export default function Selector(props) {

    // To show or not to show the styles row
    const [showStyles, setStylesVisibility] = useState(true)

    // THE FUTURE

    // const getStyles = breakpoint => {
    //     return props.selectorStyles[breakpoint] != undefined ? props.selectorStyles : false
    // }

    
    // THE FUTURE
    
    // const MediaBreakpoints = {
    //     'screenWidth': 'All Devices',
    //     'pageWidth': 'Page Width',
    //     'tablet': 'Tablet',
    //     'phoneLandscape': 'Phone Landscape',
    //     'phonePortrait': 'Phone Portrait'
    // }

            
    // THE FUTURE
    // {
    //     showStyles ? Object.keys(MediaBreakpoints).map((title, data) => 
    //         <MediaBreakpoint
    //             breakpointStyles={() => getStyles(data)}
    //             breakpointType={data}
    //             breakpointName={title}
    //             selector={selector} />
    //     ) : null
    // } 

    const screenWidthStyles = props.selectorStyles.screenWidth != undefined ? props.selectorStyles.screenWidth : false
    const pageWidthStyles = props.selectorStyles.pageWidth != undefined ? props.selectorStyles.pageWidth : false
    const tabletStyles = props.selectorStyles.tablet != undefined ? props.selectorStyles.tablet : false
    const phoneLandscapeStyles = props.selectorStyles.phoneLandscape != undefined ? props.selectorStyles.phoneLandscape : false
    const phonePortraitStyles = props.selectorStyles.phonePortrait != undefined ? props.selectorStyles.phonePortrait : false

    const selector = {
        type: props.selectorType,
        name: props.selectorName
    }

    // The final return
    return (
        <>
            <div>
                {showStyles ?
                    <i className='fa fa-chevron-down' onClick={() => setStylesVisibility(false)} ></i>
                    : <i className='fa fa-chevron-right' onClick={() => setStylesVisibility(true)} ></i>
                }
                <div className={'selector-is-' + props.selectorType}>{props.selectorType}</div>
                <div className='selector-header'>{props.selectorName}</div>
            </div>
            {showStyles ? (
                <div className={'sf-row ' + props.selectorType + '-styles'}>

                    <MediaBreakpoint
                        breakpointStyles={screenWidthStyles}
                        breakpointType='screenWidth'
                        breakpointName='original'
                        selector={selector}
                        setVisibility={props.setVisibility} />

                    <MediaBreakpoint
                        breakpointStyles={pageWidthStyles}
                        breakpointType='pageWidth'
                        breakpointName='page-width'
                        selector={selector}
                        setVisibility={props.setVisibility} />

                    <MediaBreakpoint
                        breakpointStyles={tabletStyles}
                        breakpointType='tablet'
                        breakpointName='tablet'
                        selector={selector}
                        setVisibility={props.setVisibility} />

                    <MediaBreakpoint
                        breakpointStyles={phoneLandscapeStyles}
                        breakpointType='phoneLandscape'
                        breakpointName='phone-landscape'
                        selector={selector}
                        setVisibility={props.setVisibility} />

                    <MediaBreakpoint
                        breakpointStyles={phonePortraitStyles}
                        breakpointType='phonePortrait'
                        breakpointName='phone-portrait'
                        selector={selector}
                        setVisibility={props.setVisibility} />
                </div>
            ) : null}
        </>
    )
}