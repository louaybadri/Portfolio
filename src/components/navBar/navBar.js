import { Link } from "react-scroll";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { AiOutlineContacts } from "react-icons/ai"
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import React, { useState } from "react";
import "./nav.css"

function NavBar(props) {

    const [index, setIndex] = useState(props.index);
    // const pages = ["home", "notif", "else1", "else2"];
    const passData = (data) => {
        props.passData(data)
        setIndex(data)
    }

    return (
        <div className="containerNav">
            {props.index !== 2 ?
                <div
                    className="nav__icon showLeft" onClick={() => {
                        // props.prev()
                        passData(index === 2 ? 2 : index + 1)
                    }}
                >
                    <MdNavigateNext className="iconNav">
                    </MdNavigateNext>

                    <div>NEXT</div>
                </div>
                : <div className="nav__icon hideLeft "><MdNavigateNext className="iconNav"></MdNavigateNext>

                </div>}


            <div className="nav__icon" onClick={() => {
                setIndex(0)
                passData(0)
            }}>
                <FaHome className={"iconNav".concat(props.index === 0 ? " active" : " ")}></FaHome>
                <div>INTRODUCTION</div>
            </div>
            <div className="nav__icon" onClick={() => {
                setIndex(1)
                passData(1)
            }}>
                <AiOutlineContacts className={"iconNav".concat(props.index === 1 ? " active" : " ")}></AiOutlineContacts>
                <div>CONTACT</div>

            </div>
            <div className="nav__icon" onClick={
                () => {
                    setIndex(2)
                    passData(2)
                }
            }>
                <IoIosNotifications className={"iconNav".concat(props.index === 2 ? " active" : " ")}></IoIosNotifications>
                <div>DESCRIPTION</div>
            </div>

            {props.index !== 0 ?
                <div
                    className="nav__icon showRight" onClick={() => {
                        // props.next()
                        passData(index === 0 ? 0 : index - 1)
                    }
                    }

                ><MdNavigateBefore className="iconNav"></MdNavigateBefore>
                    <div>PREVIOUS</div>
                </div>
                : <div className="nav__icon"> <MdNavigateBefore className="iconNav hideRight "></MdNavigateBefore> </div>

            }

            {/* AiOutlineContacts */}


        </div>)

}

export default NavBar;