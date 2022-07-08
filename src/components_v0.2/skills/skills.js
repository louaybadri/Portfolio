import React, { useState } from 'react'
import "./skills.css"
import Skill from "./skills/skill.js"

const Skills = () => {
    const [index, setIndex] = useState(0)
    return (
        <div className='skills_page page'>
            <h3><Skill /> </h3>
        </div>
    )
}

export default Skills