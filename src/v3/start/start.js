import "./start.css";
import React, { Component } from "react";
import ME from "../../assets/imgs/me.png";

class Start extends Component {
  render() {
    return (
      <div>
        <div className="container_start page">
          <div className="welcome">
            <h1>Louay Badri</h1> <h2>Software Engineer</h2>
            <p>
              Hello, my name is Louay, I am a Software Engineer Student who specializes in web/mobile development ,I am looking forward to utilize the extensive knowledge I have gained within a team in order to enhance my soft/tech skills. I'm a strong team player who is able to quickly learn and apply new technologies
            </p>
          </div><div className="start_img">

            <img src={ME} alt="image not found" className="image" />
            <div ></div>

          </div>
        </div>
      </div>
    );
  }
}

export default Start;
