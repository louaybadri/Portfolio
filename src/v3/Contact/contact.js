import React from "react";
import "./contact.css";
import ContactItem from "./contact_item/contact_item";
// import "./desc.css";

import { BsLinkedin, BsFacebook, BsInstagram, BsTwitter, BsPhone } from "react-icons/bs";
function Contact(props) {
  return (
    <div id={props.id} className="contact_page page">
      <ContactItem
        icon={<BsLinkedin />}
        title={"LinkedIn"}
        url={"https://www.linkedin.com/in/louay-badri-184855222/"}
      />
      <ContactItem
        icon={<BsFacebook />}
        title={"/louayelbadri"}
        url={"https://www.facebook.com/louayelbadri/"}
      />
      <ContactItem
        icon={<BsTwitter />}
        title={"/LouayELBadri"}
        url={"https://twitter.com/LouayELBadri"}
      />
      <ContactItem
        icon={<BsInstagram />}
        title={"/louayelbadri"}
        url={"https://www.instagram.com/louayelbadri/"}
      />
      <ContactItem
        icon={<BsPhone />}
        title={"+216 56 427 403"}

      />
    </div>
  );
}

export default Contact;
