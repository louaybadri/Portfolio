import { AiOutlineContacts } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri"
import Start from "../start/start";
import Description from "../desc/desc";
import Contact from "../Contact/contact";
import Skills from "../skills/skills";
const items = (index) => {
  return [
    {
      title: "INTRODUCITON",
      element: (
        <FaHome className={"iconNav".concat(index === 0 ? " active" : " ")} />
      ),
      page: <Start />,
      link: "/introduction",
    },
    {
      title: "NOTIF",
      element: (
        <IoIosNotifications
          className={"iconNav".concat(index === 1 ? " active" : " ")}
        />
      ),
      page: <Description />,
      link: "/notif",
    },

    {
      title: "SKILLS",
      element: (
        <RiComputerLine
          className={"iconNav".concat(index === 2 ? " active" : " ")}
        />
      ),
      page: <Skills />,
      link: "/skills",
    },
    {
      title: "CONTACT",
      element: (
        <AiOutlineContacts
          className={"iconNav".concat(index === 3 ? " active" : " ")}
        />
      ),
      page: <Contact />,
      link: "/contact",
    }
  ];
};

export default items;
