import { AiOutlineContacts } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import Start from "../start/start";
import Description from "../desc/desc";
import Contact from "../Contact/contact";
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
      title: "CONTACT",
      element: (
        <AiOutlineContacts
          className={"iconNav".concat(index === 2 ? " active" : " ")}
        />
      ),
      page: <Contact />,
      link: "/contact",
    },
  ];
};

export default items;
