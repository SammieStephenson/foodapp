// import React from "react";
// import "./resta.css";
import { Component } from "react";
import { Map, GoogleApiWrapper } from "google-map-react";

class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                style={{ width: "100%", height: "100%" }}
                zoom={10}
                initialCenter={
                    {
                        lat: 35.245309,
                        lng: -80.804737
                    }
                }

            />
        );
    }
}



export default GoogleApiWrapper({
    apiKey: "AIzaSyD9lubBFDNuvtMw5rCDiwKaip2Ezjq8Lvs"
})(MapContainer)