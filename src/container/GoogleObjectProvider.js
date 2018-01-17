import React, {Component} from "react";
import {GoogleApiWrapper} from "google-maps-react";
import ComponentWithMap from "../main/ComponentWithMap";

class GoogleObjectProvider extends Component {
    render() {
        return <ComponentWithMap google={this.props.google}/>;
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAJViySsGVmSL_PFAu9Xx76qp6HRMpDdZo'
})(GoogleObjectProvider);