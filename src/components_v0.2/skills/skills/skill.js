import React from 'react'
import "./skill.css"
const Skill = (props) => {
    return (<div className='skill_container'>

        <div className=' skill'>
            <div className='skill_icon'>{props.icon}</div>
            <div className='skill_description'>{props.description} </div></div>
        <div className='skill_hovered'></div>

    </div>

    )
}

export default Skill