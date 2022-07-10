import React from 'react'
import "./skill.css"
import { SiFlutter } from "react-icons/si"
const Skill = () => {
    return (<div className='skill_container'>

        <div className=' skill'>
            <SiFlutter className='skill_icon' />
            <div>Description </div></div>
        <div className='skill_hovered'></div>

    </div>

    )
}

export default Skill