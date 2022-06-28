import React, { useState } from "react";
import "./nav.css"
import { NextItem, NavItem, PrevItem } from "../../components_v0.2/navBar/nav_item/nav_item";
import items from "../data/data"

function NavBar(props) {

    const [index, setIndex] = useState(props.index);
    const passData = (data) => {
        props.passData(data)
        setIndex(data)
    }

    return (
        <div className="containerNav">
            <NextItem index={props.index} passData={passData} />

            {items(props.index).map((value, index) => {
                return <NavItem key={index} setIndex={setIndex} passData={passData} index={index} title={value.title} component={value.element} />
            })}


            <PrevItem index={props.index} passData={passData} />



        </div>)

}

export default NavBar;