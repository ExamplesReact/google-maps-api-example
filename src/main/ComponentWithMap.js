import React, {Component} from "react";
import {Tab, Tabs} from "material-ui";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DefaultMap from "../default/DefaultMap";
import CustomMap from "../custom/CustomMap";

class ComponentWithMap extends Component {
    renderDefaultMap() {
        if (this.props.google) {
            return (
                <div className='mapContainer'>
                    <DefaultMap google={this.props.google}/>
                </div>
            );
        }
        return null;
    }

    renderCustomMap() {
        if (this.props.google) {
            return (
                <CustomMap google={this.props.google}/>
            );
        }
        return null;
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <Tabs>
                    <Tab label="Example with built-in google-maps-react features">
                        {this.renderDefaultMap()}
                    </Tab>
                    <Tab label="Example creating custom map">
                        {this.renderCustomMap()}
                    </Tab>
                </Tabs>
            </MuiThemeProvider>
        );

    }
}

export default ComponentWithMap;