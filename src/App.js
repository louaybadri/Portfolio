import React, { Component, useCallback, useState } from "react";

import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import "./app.css"
import NavBar from "./components_v0.2/navBar/navBar";
import items from "./components_v0.2/data/data"

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nextPage: true,
            index: 0,
            first: true,
            previousPage: -1,

        }

    }


    next() {
        this.setState({
            previousPage: this.state.index,
            first: false,
            index: this.state.index === 2 ? 2 : (this.state.index + 1),
            nextPage: true,
        })
    }

    prev() {
        this.setState({
            previousPage: this.state.index,
            nextPage: false,
            first: false,
            index: this.state.index === 0 ? 0 : this.state.index - 1
        })

    }
    passData = (data) => {
        this.setState({
            nextPage: this.state.index < data,
            first: data === this.state.index,
            previousPage: this.state.index,
            index: data,


        }, () => {
            console.log("index", this.state.index)
            console.log("previousPage", this.state.previousPage)
            console.log("data", data)
        })



    }
    render() {

        const classNavName = (x) => {
            if (x === this.state.index && this.state.index === this.state.previousPage) {
                return (" ")
            } else
                if (this.state.first && x === this.state.index) {
                    return ("showLeft")
                } else if (this.state.first && x !== this.state.index && this.state.nextPage) {
                    return ("hidden")
                } else
                    /* next and not first and the right page */
                    if (!this.state.first && this.state.nextPage && x === this.state.index) {
                        return "showRight"
                    } else
                        /* next and not first and not the right page */
                        if (!this.state.first && this.state.nextPage && x === this.state.previousPage) {
                            return "hideLeft"
                        } else
                            /* prev and not first and the right page */
                            if (!this.state.first && !this.state.nextPage && x === this.state.index) {
                                return "showLeft"
                            } else
                                /* prev and not first and not the right page */
                                if (!this.state.first && !this.state.nextPage && (x === this.state.previousPage)) {
                                    return "hideRight"
                                } else {
                                    return "hidden"
                                }
        }

        return (<div >
            <NavBar passData={this.passData} next={this.next} prev={this.prev} index={this.state.index} />
            <IoCaretForward onClick={() => {
                this.next()
            }} className={"next_icon ".concat(this.state.index === 2 ? " hideLeft" : " showLeft")} />
            <IoCaretBack onClick={() => {
                this.prev()
            }} className={"prev_icon ".concat(this.state.index === 0 ? " hideRight" : " showRight")} />
            <div className="container-test">
                {items(this.props.index).map((value, index) => {
                    return <div key={index}
                        className={"item ".concat(classNavName(index))}>
                        {value.page}
                    </div>
                })}
            </div>
        </div>
        )
    }


}
