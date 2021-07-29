import React, { Component } from "react";

class Rain extends Component{
    render(){
        return <div className="rain">
            <h4>Rain</h4>
            <p><strong>Last Hour: </strong>3mm</p>
            <p><strong>Last 3 Hours: </strong>10mm</p>
        </div>;
    }
}

export default Rain;