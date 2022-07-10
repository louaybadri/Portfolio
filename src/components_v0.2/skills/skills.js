import React, { useState } from 'react'
import "./skills.css"
import Skill from "./skills/skill.js"

const Skills = () => {
    const [index, setIndex] = useState(0)
    return (
        <div className='page skills_page'>
            <div className='skills_grid'>
                <Skill />
                <Skill />
                <Skill /><Skill />
                <Skill />
                <Skill /><Skill />
                <Skill />
                <Skill /><Skill />
                <Skill />
                <Skill />
            </div>
        </div>
    )
}

export default Skills