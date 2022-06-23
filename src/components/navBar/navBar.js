import {Link} from "react-scroll";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import {AiOutlineContacts} from "react-icons/ai"
import {FaHome} from "react-icons/fa";
import {IoIosNotifications} from "react-icons/io";
import React, {useState} from "react";
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
            {index !== 2 ? <MdNavigateNext onClick={() => {
                // props.prev()
                passData(index === 2 ? 2 : index + 1)
            }} className="iconNav showLeft"></MdNavigateNext>
                : <MdNavigateNext className="iconNav hideLeft "></MdNavigateNext>}
              
                <FaHome onClick={() => {
                    setIndex(0)
                    passData(0)
                }} className="iconNav home_icon"></FaHome>
            
            <AiOutlineContacts onClick={() => {
                setIndex(1)
                 passData(1)
                }} className="iconNav "></AiOutlineContacts>
            
                <IoIosNotifications onClick={
                    () => {
                        setIndex(2)
                        passData(2)
                    }
                } className="iconNav notif_icon"></IoIosNotifications>
              {index!==0?<MdNavigateBefore onClick={() => {
                    // props.next()
                    passData(index===0?0:index-1)
                }} className="iconNav showRight back_icon"></MdNavigateBefore>:<MdNavigateBefore className="iconNav hideRight back_icon"></MdNavigateBefore>}
            
            
            {/* AiOutlineContacts */}
            

        </div>)

}

export default NavBar;