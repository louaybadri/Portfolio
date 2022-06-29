import React, { Component } from "react";
import "./contact.css"
import ContactItem from "./contact_item/contact_item";
// import "./desc.css";

import { BsLinkedin, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"
class Contact extends Component {
    render() {
        return (
            <div className="contact_page page">
                <ContactItem icon={<BsLinkedin />} title={"LinkedIn"} />
                <ContactItem icon={<BsFacebook />} title={"Facebook"} />
                <ContactItem icon={<BsTwitter />} title={"LinkedIn"} />
                <ContactItem icon={<BsInstagram />} title={"LinkedIn"} />

            </div>
        )
    }
}

export default Contact
