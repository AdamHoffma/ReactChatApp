import React from 'react'

import BasicScrollToBottom from  "react-scroll-to-bottom"

import Message from '../Message/Message'

import './Messages.css'

const Messages = ({ messages, name}) => (
    <BasicScrollToBottom className="messages">
        {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
    </BasicScrollToBottom>
)

export default Messages