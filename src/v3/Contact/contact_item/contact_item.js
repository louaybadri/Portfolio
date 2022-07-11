import React, { useState } from "react";
import "./contact_item.css";
const ContactItem = (props) => {
  const [active, setActive] = useState(props.active);
  return (
    <div className={active ? " contact_item is_active simpleShow" : " contact_item"}>
      <div
        onClick={() => {
          setActive(!active);
        }}
        className="contact_item_icon"
      >
        {props.icon}
      </div>
      <div className={active ? "contact_item_Text simpleShow " : " simpleHide"}>
        <a href={props.url} target="blank">
          {props.title}
        </a>
      </div>
    </div>
  );
};

export default ContactItem;
