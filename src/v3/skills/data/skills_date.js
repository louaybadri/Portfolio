import { SiFlutter } from "react-icons/si"
import { GrReactjs } from "react-icons/gr"
import { AiOutlineHtml5 } from "react-icons/ai"
import { DiCss3Full } from "react-icons/di"
import { DiJavascript1 } from "react-icons/di"
import { DiJava } from "react-icons/di"
import { SiCplusplus } from "react-icons/si"
import { IoLogoPython } from "react-icons/io"
import { FaBootstrap } from "react-icons/fa";
import { SiMysql } from "react-icons/si"
class SkillData {
    constructor(description, icon) {
        this.description = description;
        this.icon = icon;
    }
}
export const skillData = [
    new SkillData("FLUTTER", <SiFlutter />),
    new SkillData("REACT", <GrReactjs />),
    new SkillData("HTML5", <AiOutlineHtml5 />),
    new SkillData("CSS", <DiCss3Full />),
    new SkillData("JS", <DiJavascript1 />),
    new SkillData("JAVA", <DiJava />),
    new SkillData("C++", <SiCplusplus />),
    new SkillData("PYTHON", <IoLogoPython />),
    new SkillData("BOOTSTRAP", <FaBootstrap />),
    new SkillData("MySQL", <SiMysql />),
]



