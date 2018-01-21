import React, {Component} from "react";
import {Tab, Tabs} from "material-ui";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Example1 from "../example1/Example1";
import Example2 from "../example2/Example2";

class ComponentWithMap extends Component {
    renderExample1() {
        if (this.props.google) {
            return (
                <div className='mapContainer'>
                    <Example1 google={this.props.google}/>
                </div>
            );
        }
        return null;
    }

    renderExample2() {
        if (this.props.google) {
            return (
                <Example2 google={this.props.google}/>
            );
        }
        return null;
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <Tabs>
                    <Tab label="Example with built-in google-maps-react features">
                        {this.renderExample1()}
                    </Tab>
                    <Tab label="Example creating custom map">
                        {this.renderExample2()}
                    </Tab>
                </Tabs>
            </MuiThemeProvider>
        );

    }
}

export default ComponentWithMap;