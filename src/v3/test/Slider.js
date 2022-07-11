import HorizontalSlider from 'react-horizontal-slider';
import React from "react"

export default class Slider2 extends React.Component {
    //other logic
    render() {
        return (<div>
                <HorizontalSlider
                    title="Menu 1"
                    data={'test'}
                    height={300}
                    width={300}
                    id={1}

                />
                //You can add Multiple Sliders if you want
                <HorizontalSlider
                    title="Menu 2"
                    data={2}
                    height={400}
                    width={350}
                    id={2}
                /></div>
        );
    }
}