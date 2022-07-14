import { AiOutlineContacts } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { GrProjects } from "react-icons/gr"
import Start from "../start/start";
import Description from "../desc/desc";
import Contact from "../Contact/contact";
import Skills from "../skills/skills";
const items = (index) => {
  return [
    {
      title: "INTRODUCITON",
      element: (
        <FaHome className={"iconNav simpleShow"} />
      ),
      page: <Start id="start" />,
      link: "/introduction",
      id: 'start'
    },
    {
      title: "DESCRIPTION",
      element: (
        <MdOutlineDescription
          className={"iconNav simpleShow"}
        />
      ),
      page: <Description id='description' />,
      link: "/notif",
      id: 'description'
    },

    {
      title: "SKILLS",
      element: (
        <RiComputerLine
          className={"iconNav simpleShow"}
        />
      ),
      page: <Skills id='skills' />,
      link: "/skills",
      id: 'skills'
    },
    {
      title: "CONTACT",
      element: (
        <AiOutlineContacts
          className={"iconNav simpleShow"}
        />
      ),
      page: <Contact id='contact' />,
      link: "/contact",
      id: 'contact'
    }
  ];
};

export default items;
