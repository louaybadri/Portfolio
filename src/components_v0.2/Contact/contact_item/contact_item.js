import React, { useState } from 'react'

import "./contact_item.css"
const ContactItem = (props) => {
    const [active, setActive] = useState(props.active)
    return (
        <div onClick={() => {
            setActive(!active)
        }} className={' contact_item '.concat(active ? " contact_item_active " : " contact_item_inactive")}>
            <div className='contact_item_icon'>{props.icon}</div>
            {active ? <div className={'contact_item_Text '}>{props.title}</div> : <></>}
        </div>
    )
}

export default ContactItem