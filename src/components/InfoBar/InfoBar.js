import React from 'react'

import './InfoBar.css'

import closeIcon from '../../icons/closeIcon.png'

import onlineIcon from '../../icons/onlineIcon.png'

const InfoBar = ({ room }) => (    
    <div className="infoBar">
        <div className='leftInnerContainer'>
            <img className="onlineIcon" src={onlineIcon} />
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer"></div>
            <a href="/"><img src={closeIcon} alt="close image" /></a>
    </div>
)

export default InfoBar