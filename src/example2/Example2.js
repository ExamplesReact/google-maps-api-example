import React, {Component} from "react";
import {findDOMNode} from "react-dom";
import {FlatButton} from "material-ui";

class CustomMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            map: null
        };
    }

    componentDidMount() {
        this.createMap();
    }

    zoomIn = () => {
        let {map} = this.state;
        let currentZoom = map.getZoom();
        map.setZoom(currentZoom + 1);
    };

    zoomOut = () => {
        let {map} = this.state;
        let currentZoom = map.getZoom();
        map.setZoom(currentZoom - 1);
    };

    createMarker = () => {
        let {google} = this.props;
        new google.maps.Marker({
            position: {
                lat: 59.934280,
                lng: 30.335099
            },
            map: this.state.map,
            draggable: true,
            clickable: true,
            icon: require('../assets/marker.png')
        });
    };

    createMap() {
        let {google} = this.props;
        let node = findDOMNode(this.refs.customMap);
        this.setState({
            map: new google.maps.Map(
                node, {
                    zoom: 14,
                    center: {
                        lat: 59.934280,
                        lng: 30.335099
                    },
                    maxZoom: 20, // specifies how many times you may zoom IN
                    minZoom: 5, // specifies how many times you may zoom OUT
                    disableDoubleClickZoom: false,
                    scrollwheel: false,
                    zoomControl: false
                }
            )
        });
    }

    render() {
        return (
            <div>
                <FlatButton
                    label="zoom in"
                    onClick={this.zoomIn}
                    className='zoomButton'
                />
                <FlatButton
                    label="zoom out"
                    onClick={this.zoomOut}
                    className='zoomButton'
                />
                <FlatButton
                    label="create marker"
                    onClick={this.createMarker}
                    className='zoomButton'
                />
                <div
                    ref='customMap'
                    className='mapContainer'
                >
                </div>
            </div>
        );
    }
}

export default CustomMap;