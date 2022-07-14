import React, { useState } from "react";
import "./nav.css";
import {
  NextItem,
  NavItem,
  PrevItem,
} from "../../components_v0.2/navBar/nav_item/nav_item";
import items from "../data/data";

function NavBar(props) {
  const [index, setIndex] = useState(props.index);
  const passData = (data) => {
    props.passData(data);
    setIndex(data);
  };

  return (
    <div className="containerNav">

      {items(props.index).map((value, index) => {
        return (
          <NavItem
            className=" simpleShow"
            id={value.id}
            key={index}
            index={index}
            title={value.title}
            component={value.element}
          />
        );
      })}
    </div>
  );
}

export default NavBar;
