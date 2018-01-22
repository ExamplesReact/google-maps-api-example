import React, {Component} from "react";
import {Map, Marker} from "google-maps-react";

class DefaultMap extends Component {
    render() {
        return (
            <Map google={this.props.google}>
                <Marker/>
            </Map>
        );
    }
}

export default DefaultMap;