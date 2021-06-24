import React from 'react'
import Style from '../style'

export default function Pseudo(props) {

    props.pathway.pseudo = {
        name: props.pseudoName
    }
    
    const stylesList = Object.keys(props.pseudoStyles)
                             .sort()
                             .map((style, index) =>
        props.pseudoStyles[style] != '' ?
            <Style
                key={index}
                styleName={style}
                styleValue={props.pseudoStyles[style]}
                pathway={props.pathway}
                setVisibility={props.setVisibility}
            />
        : null
    )

    return (
        <div className='sf-state'>
            <div className='sf-state__name'>{props.pseudoName}</div>
            <div className='sf-state__styles'>
                {stylesList}
            </div>
        </div>
    )
}