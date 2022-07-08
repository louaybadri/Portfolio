import React from 'react'
import "./skill.css"
import { SiFlutter } from "react-icons/si"
const Skill = () => {
    return (<div className='skill_container'>
        <div className='skill1 skill'>
            <SiFlutter className='skill_icon simpleShow' />
            <div>Description </div></div>
        <div className='skill2 skill'>
            <SiFlutter className='skill_icon simpleShow' />
            <div>Description </div>
        </div>
        {/* <div className='skill3 skill'>
            <SiFlutter className='skill_icon simpleShow' />
            <div>Description </div>
        </div> */}
    </div>

    )
}

export default Skill