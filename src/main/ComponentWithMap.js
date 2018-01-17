import React, {Component} from "react";
import {Tab, Tabs} from "material-ui";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Example1 from "../example1/Example1";
import Example2 from "../example2/Example2";

class ComponentWithMap extends Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <Tabs>
                    <Tab label="Example with built-in google-maps-react features">
                        <div style={{height:'95vh'}}>
                            {this.props.google && <Example1 google={this.props.google}/>}
                        </div>
                    </Tab>
                    <Tab label="Example creating custom map">
                        <Example2/>
                    </Tab>
                </Tabs>
            </MuiThemeProvider>
        );

    }
}

export default ComponentWithMap;