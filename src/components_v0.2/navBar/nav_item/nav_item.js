import React from "react";
import { Component } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import items from "../../data/data";
class NavItem extends Component {
  render() {
    return (
      <div
        className="nav__icon"
        onClick={() => {
          this.props.setIndex(this.props.index);
          this.props.passData(this.props.index);
        }}
      >
        {this.props.component}
        <div>{this.props.title}</div>
      </div>
    );
  }
}
class NextItem extends Component {
  render() {
    return (
      <div>
        {this.props.index !== items(this.props.index).length - 1 ? (
          <div
            className="nav__icon showLeft"
            onClick={() => {
              // props.prev()
              this.props.passData(
                this.props.index === items(0).length - 1 ? items(0).length - 1 : this.props.index + 1
              );
            }}
          >
            <MdNavigateNext className="iconNav"></MdNavigateNext>

            <div>NEXT</div>
          </div>
        ) : (
          <div className="nav__icon hideLeft ">
            <MdNavigateNext className="iconNav"></MdNavigateNext>
          </div>
        )}
      </div>
    );
  }
}
class PrevItem extends Component {
  render() {
    return (
      <div>
        {this.props.index !== 0 ? (
          <div
            className="nav__icon showRight"
            onClick={() => {
              // props.next()
              this.props.passData(
                this.props.index === 0 ? 0 : this.props.index - 1
              );
            }}
          >
            <MdNavigateBefore className="iconNav"></MdNavigateBefore>
            <div>PREVIOUS</div>
          </div>
        ) : (
          <div className="nav__icon">
            {" "}
            <MdNavigateBefore className="iconNav hideRight "></MdNavigateBefore>{" "}
          </div>
        )}
      </div>
    );
  }
}
export { NextItem, NavItem, PrevItem };
