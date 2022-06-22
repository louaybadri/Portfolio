import {Link} from "react-scroll";
import {MdNavigateBefore, MdNavigateNext} from "react-icons/md";
import {FaHome} from "react-icons/fa";
import {IoIosNotifications} from "react-icons/io";
import React, {useState} from "react";
import "./nav.css"

function NavBar() {


    const [index, setIndex] = useState(0);
    const pages = ["home", "notif", "else1", "else2"];
    function verif(index){
        index = index<0 ? 0 : index;
        index = index>3 ? 3 : index;
        setIndex(index)

    }

    return (
        <div className="containerNav">
            <Link to={pages[index - 1]} smooth={true} spy={true}>
                <MdNavigateBefore onClick={() => verif(index - 1)} className="iconNav back_icon"></MdNavigateBefore>
            </Link>
            <Link to="home" smooth={true} spy={true}>
                <FaHome onClick={() => setIndex(0)} className="iconNav home_icon"></FaHome>
            </Link>
            <Link to="notif" smooth={true} spy={true}>
                <IoIosNotifications onClick={
                    () => setIndex(1)
                } className="iconNav notif_icon"></IoIosNotifications>
            </Link>
            <Link to={pages[index + 1]} smooth={true} spy={true}>
                <MdNavigateNext onClick={() => verif(index + 1)} className="iconNav "></MdNavigateNext>
            </Link>

        </div>)

}

export default NavBar;