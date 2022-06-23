import React, {Component, useCallback, useState} from "react";
// import {} from "@types/react";
import Start from "./components_v0.2/start/start";
import Description from "./components_v0.2/desc/desc";
import {IoCaretBack,IoCaretForward} from "react-icons/io5";
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
//     // const previousPage = pages[index]
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
            first: true,
            previousPage:-1,

        }
        
    }

    next() {
        // console.log(index);
        this.setState({
            previousPage:this.state.index,
            first: false,
            index: this.state.index===2?2:(this.state.index + 1) ,
            nextPage: true,
        })

        // setHidden(false)
    }

    prev() {
        this.setState({
            previousPage:this.state.index,
            nextPage: false,
            first: false,
            index: this.state.index === 0 ? 0 : this.state.index - 1
        })
        // setHidden(true)
        // setNextPage(false)
        // setFirst(false)

    }
    passData = (data) => {
        this.setState({
            nextPage:this.state.index<data,
            first: data===this.state.index,
            previousPage:this.state.index,
            index: data,
            
            
        }, () => {
            console.log("index", this.state.index)
        console.log("previousPage", this.state.previousPage)
        console.log("data", data)
        })
        
        
        
    }
    render() {
        // const [nextPage, setNextPage] = useState(true);
        // const [index, setIndex] = useState(0);
        //
        // const [, setFirst] = useState(true);

        const classNavName = (x) => {
            if (x=== this.state.index && this.state.index === this.state.previousPage) {
                return(" ")
            }else
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

        
        
        // console.log(index)
        return (<div>
            <NavBar passData={this.passData} next={this.next} prev={this.prev} index={this.state.index} />
                <IoCaretForward onClick={() => {
                    this.next()
                }} className={"next_icon ".concat(this.state.index===2?" hideLeft":" showLeft")}/>
                <IoCaretBack onClick={() => {
                    this.prev()
                }} className={"prev_icon ".concat(this.state.index===0?" hideRight":" showRight")}/>
                <div className="container-test">
                    <div
                        className={"item item1 ".concat(classNavName(1))}>
                        <Start/>
                    </div>
                    <div
                        className={"item item2  ".concat(classNavName(0))}>
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