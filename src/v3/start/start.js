import "./start.css";
import React, { Component } from "react";
import ME from "../../assets/imgs/me.png";

class Start extends Component {
  render() {
    return (
      <div id={this.props.id}>
        <div className="container_start page">
          <div className="welcome" >
            <h1>Louay Badri</h1> <h2>Software Engineer</h2>

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
