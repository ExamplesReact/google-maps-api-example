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
        let marker = new google.maps.Marker({
            position: {
                lat: 59.934280,
                lng: 30.335099
            },
            map: this.state.map,
            draggable: true,
            clickable: true,
            icon: require('../assets/marker.png')

        });
        let infowindow = new google.maps.InfoWindow({
            content: '<strong>Left click</strong> - to change marker ' +
            '<br>' +
            '<strong>Ctrl+click</strong> - to delete ' +
            '<br>' +
            '<strong>Right click</strong> - to remove click event listeners'
        });

        marker.addListener('mouseover', () => {
            infowindow.open(this.state.map, marker);
        });

        marker.addListener('mouseout', () => {
            infowindow.close();
        });

        let clickListener = marker.addListener('click', (event) => {
            if (event.ta.ctrlKey) {
                marker.setMap(null);
                return;
            }
            if (marker.getIcon() === require('../assets/marker.png')) {
                marker.setIcon(require('../assets/marker1.png'));
                return;
            }
            marker.setIcon(require('../assets/marker.png'));

        });

        marker.addListener('rightclick', () => {
            google.maps.event.removeListener(clickListener);
        });
    };

    createLine = () => {
        let {google} = this.props;
        new google.maps.Polyline({
            path: [{
                lat: 59.934280,
                lng: 30.335099
            }, {
                lat: 59.95,
                lng: 30.321
            }, {
                lat: 59.935,
                lng: 30.337
            }],
            map: this.state.map,
            strokeColor: 'red',
            strokeWeight: 8,
            draggable: true,
            editable: true,
            icons: [{
                repeat: '70px',
                icon: {
                    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                    scale: 6,
                    strokeColor: 'black'
                }
            }]
        })
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
                <FlatButton
                    label="create line"
                    onClick={this.createLine}
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