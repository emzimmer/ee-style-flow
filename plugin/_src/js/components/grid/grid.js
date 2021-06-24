import React from 'react'
import Selector from '../selector'
import componentStructuredData from '../../component-structured-data'

export default function StyleFlowStyles(props) {

    // The function is basically a context, but with less to worry about
    const componentStyles = componentStructuredData($scope.iframeScope);

    /**
     * Output
     */
    return (
        <div className='styles-wrap'>
            <Selector
                selectorType='id'
                selectorStyles={componentStyles.id}
                selectorName={componentStyles.selector}
                setVisibility={props.setVisibility}
            />
            {Object.keys(componentStyles.classes).map((selectorName, index) =>
                <Selector
                    key={index}
                    selectorType='class'
                    selectorStyles={componentStyles.classes[selectorName]}
                    selectorName={selectorName}
                    setVisibility={props.setVisibility}
                />
            )}
        </div>
    )
}