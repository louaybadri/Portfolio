import React, { Component } from "react";
import "./desc.css";


class Description extends Component {
    render() {
        return (
            <div id={this.props.id} className="container_description page" >
                <div>Who AM I?</div>
                <p>
                    My name is Louay, I am a Software Engineer Student who specializes in web/mobile development ,I am looking forward to utilize the extensive knowledge I have gained within a team in order to enhance my soft/tech skills. I'm a strong team player who is able to quickly learn and apply new technologies
                </p>
            </div>
        )
    }
}

export default Description