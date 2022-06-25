import "./start.css";
import React, { Component } from "react";
import ME from "../../assets/imgs/me.png";


class Start extends Component {


    render() {
        return (<div>
            <div className="container_start">
                <div className="welcome"><h1>Louay Badri</h1> <h2>Software Engineer</h2></div>
                <div className="img"><img src={ME} alt="image not found" /></div></div>


        </div>
        )
    }
}

export default Start;