import React, { Component } from 'react';
import { Paper, Divider, Typography, Grid, ListItem, List, Tabs, Tab } from '@material-ui/core';
import { Content1, Content2, Content3, Content4, Content5 } from '../component/content'
import CoverImg from '../image/profile_bg.jpg'
import ProfileImg from '../image/profile.png'
import Baner from '../component/technology'
import '../App.css';

const ProfileStyle = {
  height:"30em",
  backgroundImage:"url("+CoverImg+")",
  backgroundSize:"cover",
  color: "white"
};

const ProfileImStyle = {
  width:"15em",
  height:"16em",
  position:"absolute",
  top:"7em",
  left: "43%",
  zIndex:"100",
  backgroundImage:"url("+ProfileImg+")",
  backgroundSize:"14.5em",
  backgroundRepeat:"no-repeat",
  borderRadius: "10%"
}

const MainContent = {
  height:"50em",
  width:"90%",
  margin:"auto",
  textAlign:"center",
  fontFamily: "Roboto",
  padding: "1em"
}

class App extends Component {
  state = {
    value: 0
  }

  handleChange = (value) => {
    this.setState({value});
  }

  render() {
      var value = this.state.value;
    return (
      <div className="App">
        <header className="App-header">
          <div style={ProfileStyle} />
          <Paper style={ProfileImStyle} />
          <div style={{width:"100%",top:"16em",position:"absolute"}}>
              <Paper style={MainContent}>
                <div style={{maxWidth:"1250px",margin:"auto"}}>
                <Typography style={{paddingTop:"3em"}} variant="h4"><b>Pokemon Kabegon</b></Typography>
                <Typography variant="h5">normal type Pokemon</Typography><br />
                <Divider variant="middle" /><br />
                <Grid container style={{paddingLeft:"2em"}}>
                  <Grid item xs={2}>
                    <Tabs>
                      <List>
                        <ListItem>
                          <Tab disabled={value === 0} label="Skills" onClick={this.handleChange.bind(this,0)} />
                        </ListItem>
                        <Divider variant="middle" />
                        <ListItem>
                          <Tab disabled={value === 1} label="Element" onClick={this.handleChange.bind(this,1)} />
                        </ListItem>
                        <Divider variant="middle" />
                        <ListItem>
                          <Tab disabled={value === 2} label="Item" onClick={this.handleChange.bind(this,2)}/>
                        </ListItem>
                        <Divider variant="middle" />
                        <ListItem>
                          <Tab disabled={value === 3} label="Location" onClick={this.handleChange.bind(this,3)}/>
                        </ListItem>
                        <Divider variant="middle" />
                        <ListItem>
                          <Tab disabled={value === 4} label="Evolution" onClick={this.handleChange.bind(this,4)}/>
                        </ListItem>
                      </List>
                    </Tabs>
                  </Grid>
                  <Grid item xs={7} style={{paddingLeft:"2em"}}>
                    {this.state.value === 0 && <Content1 />}
                    {this.state.value === 1 && <Content2 />}
                    {this.state.value === 2 && <Content3 />}
                    {this.state.value === 3 && <Content4 />}
                    {this.state.value === 4 && <Content5 />}
                  </Grid>
                </Grid><br /><br />
                <Divider variant="middle" />
                </div>
                <Baner />
              </Paper>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
