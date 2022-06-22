import React, {Component, useState} from "react";
// import {} from "@types/react";
import Start from "./components_v0.2/start/start";
import Description from "./components_v0.2/desc/desc";
import {MdNavigateNext} from "react-icons/md";
import Contact from "./components_v0.2/Contact/contact";
// import Slider from "./components_v0.2/test/index"
import "./app.css"
import NavBar from "./components/navBar/navBar";
//
// export default function App() {
//
//
//     //****************************************************************
//
//
//     // const current = pages[index]
//
//
//     //****************************************************************
//
//     function goNext() {
//         // setIndex((index + 1) % pages.length)
//         setActive(true)
//     }
//
//     function goPrev() {
//         // index !== 0 ?
//         //     setIndex(index - 1) : setIndex(pages.length - 1)
//         setActive(false)
//     }
//
//     // const [index, setIndex] = useState(0);
//     const [active, setActive] = useState(true);
//     // const pages = [<Start className={index === 0 ? "show" : "hide"}/>,
//     //     <Description className={index === 1 ? "show" : "hide"}/>,
//     //     <Contact className={index === 2 ? "show" : "hide"}/>]
//     return (<div>
//         <MdNavigateNext onClick={goNext} className="next_icon"/>
//         <MdNavigateNext onClick={goPrev} className="prev_icon"/>
//         <Start className={active === true ? "hide" : null}/>
//     </div>);
//
// }

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nextPage: true,
            index: 0,
            first: true

        }
    }

    next() {
        // console.log(index);
        this.setState({
            first: false,
            index: this.state.index===2?2:(this.state.index + 1) ,
            nextPage: true,
        })

        // setHidden(false)
        console.log(this.state.index);
    }

    prev() {
        this.setState({
            nextPage: false,
            first: false,
            index: this.state.index === 0 ? 0 : this.state.index - 1
        })
        // setHidden(true)
        // setNextPage(false)
        // setFirst(false)

        console.log(this.state.index);
    }

    render() {
        // const [nextPage, setNextPage] = useState(true);
        // const [index, setIndex] = useState(0);
        //
        // const [, setFirst] = useState(true);

        const classNavName = (x) => {
            if (this.state.first && x === 0) {
                return ("showLeft")
            } else if (this.state.first && x !== 0 && this.state.nextPage) {
                return ("hidden")
            } else
                /* next and not first and the right page */
            if (!this.state.first && this.state.nextPage && x === this.state.index) {
                return "showRight"
            } else
                /* next and not first and not the right page */
            if (!this.state.first && this.state.nextPage && x - this.state.index === -1) {
                return "hideLeft"
            } else
                /* prev and not first and the right page */
            if (!this.state.first && !this.state.nextPage && x === this.state.index) {
                return "showLeft"
            } else
                /* prev and not first and not the right page */
            if (!this.state.first && !this.state.nextPage && (x - this.state.index === 1)) {
                return "hideRight"
            } else {
                return "hidden"
            }
        }


        // console.log(index)
        return (<div>
<NavBar/>
                <MdNavigateNext onClick={() => {
                    this.next()
                }} className={"next_icon".concat(this.state.index===2?" hideLeft":" showLeft")}/>
                <MdNavigateNext onClick={() => {
                    this.prev()
                }} className={"prev_icon ".concat(this.state.index===0?" hideLeft":" showLeft")}/>
                <div className="container-test">
                    <div
                        className={"item item1 ".concat(classNavName(0))}>
                        <Start/>
                    </div>
                    <div
                        className={"item item2  ".concat(classNavName(1))}>
                        <Description/>
                    </div>
                    <div
                        className={"item item3 ".concat(classNavName(2))}>
                        <Contact/>
                    </div>
                </div>
            </div>
        )
    }


}