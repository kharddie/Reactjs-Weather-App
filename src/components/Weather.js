import React from "react";

const Weather = props => {
    console.log(props);
    return (
        <div>
            {props.country && props.city && <p>Location: {props.country} , {props.city}</p>}
            {props.temperature && <p>Tempreture: {props.temperature}</p>}
            {props.humidity && <p>Humidity: {props.humidity}</p>}
            {props.description && <p>Decription: {props.description}</p>}
            {props.error && <p>Error: {props.error}</p>}
        </div>
    )
}

export default Weather;