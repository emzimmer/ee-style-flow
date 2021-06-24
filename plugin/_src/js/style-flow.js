import React, { useState } from 'react'
import StylesGrid from './components/grid'

export default function StyleFlow() {

    // Are dialogue and backdrop visible?
    const [isVisible, setVisibility] = useState(false)

    return (
        <>
        <div className='toggle-style-flow' onClick={() => setVisibility(true)}>Style Flow</div>
        {isVisible ?

            <div className='style-flow-dialogue'>
                <div className='sf-backdrop' onClick={() => setVisibility(false)}></div>
                <div className='sf-container'>
                    <header>
                        <h2>Style Flow</h2>
                        <i className='fa fa-times' onClick={() => setVisibility(false)}></i>
                    </header>
                    <StylesGrid setVisibility={setVisibility} />
                </div>
            </div>

        : null}
        </>
    )
}