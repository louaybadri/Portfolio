import React, { useState } from "react";
import "./contact_item.css";
const ContactItem = (props) => {
  const [active, setActive] = useState(props.active);
  return (
    <div className={" contact_item "}>
      <div
        onClick={() => {
          setActive(!active);
        }}
        className="contact_item_icon"
      >
        {props.icon}
      </div>
      <div className={"contact_item_Text simpleShow "}>
        <a href={props.url} target="blank">
          {props.title}
        </a>
      </div>
    </div>
  );
};

export default ContactItem;
