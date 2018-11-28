import React, {Component} from 'react';
import {Button, withStyles, Grid} from '@material-ui/core';

const WhiteBut = withStyles({
    root: {
        color: "white",
        fontSize:"24px"
    },
    label: {
        textTransform: 'capitalize',
    }
})(Button);

const navStyle = {
    position:"absolute",
    top:25,
    width: "100vw"
}

class Header extends Component {
    render() {
        return (
            <Grid container justify="center" style={navStyle}>
                <Grid item xs={11}>
                <WhiteBut><b>Home</b></WhiteBut>
                <span style={{float:"right"}}>
                <WhiteBut><i className="fa fa-github-square" /></WhiteBut>
                <WhiteBut><i className="fa fa-linkedin-square" /></WhiteBut>
                <WhiteBut><i className="fa fa-facebook-official" /></WhiteBut>
                </span>
                </Grid>
            </Grid>
        );
    }
}

export default Header;