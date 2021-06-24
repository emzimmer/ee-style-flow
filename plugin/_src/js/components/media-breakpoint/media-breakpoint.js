import React from 'react'
import Pseudo from '../pseudo'

export default function MediaBreakpoint(props) {

    let pseudosOutput = null

    // Styles exist for this breakpoint, or have existed recently (could be empty object)
    if ( props.breakpointStyles && Object.keys(props.breakpointStyles).length > 0 ) {

        pseudosOutput = Object.keys(props.breakpointStyles).map((pseudoStyle, index) =>
            (props.breakpointStyles[pseudoStyle] && Object.keys(props.breakpointStyles[pseudoStyle]).length > 0) ?
                <Pseudo
                    key={index}
                    pseudoStyles={props.breakpointStyles[pseudoStyle]}
                    pseudoName={pseudoStyle}
                    pathway={{
                        selector: props.selector,
                        breakpoint: {
                            type: props.breakpointType,
                            name: props.breakpointName
                        }
                    }}
                    setVisibility={props.setVisibility}
                />
            : null
        )
    }

    if ( ! pseudosOutput || ! pseudosOutput.length > 0 ) {
        pseudosOutput = <div className='sf-no-styles'>No styles here.</div>
    }

    return (
        <div className='sf-col sf-media-breakpoint'>
            <div className='sf-media-breakpoint__name'>{props.breakpointName}</div>
            {pseudosOutput}
        </div>
    )
}