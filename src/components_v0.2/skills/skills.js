import React, { useState } from 'react'
import "./skills.css"
import Skill from "./skills/skill.js"
import { skillData } from './data/skills_date'
const Skills = () => {
    const [index, setIndex] = useState(0)
    return (
        <div className='page skills_page'>
            <div className='skills_grid'>
                {skillData.map((value) => {
                    return <Skill description={value.description} icon={value.icon} />
                })}

            </div>
        </div>
    )
}

export default Skills