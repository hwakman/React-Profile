import React from 'react';
import Angular_ico from '../image/angular_ico.png';
import Postgesql_ico from '../image/postgesql_ico.png';
import React_ico from '../image/react_ico.png';
import Redux_ico from '../image/redux_ico.png';
import Node_ico from '../image/node_ico.png';
import Mysql_ico from '../image/mysql_ico.png';
import Laravel_ico from '../image/Laravel_ico.png';
import Git_ico from '../image/git_ico.png';

const imageStyle = {
    height: "100px",
    margin: "15px 20px"
}

export default class Banner extends React.Component {
    render(){
        return(
            <div>
                <div>
                    <img src={Angular_ico} style={imageStyle} alt="icon" />
                    <img src={React_ico} style={imageStyle} alt="icon" />
                    <img src={Redux_ico} style={imageStyle} alt="icon" />
                    <img src={Node_ico} style={imageStyle} alt="icon" />
                    <img src={Laravel_ico} style={imageStyle} alt="icon" />
                    <img src={Postgesql_ico} style={imageStyle} alt="icon" />
                    <img src={Mysql_ico} style={imageStyle} alt="icon" />
                    <img src={Git_ico} style={imageStyle} alt="icon" />
                </div>
            </div>
        );
    }
}