import React from "react";
import LocationPicker from "react-leaflet-location-picker";


const MapApp = ({point,setPoint}) => {
  const pointVals = [point];
  const pointMode = {
    banner: false,
    control: {
      values: pointVals,
      onClick: point =>{
        console.log("I've just been clicked on the map!", point);
        setPoint(point);
      },
      onRemove: point =>
        console.log("I've just been clicked for removal :(", point)
    }
  };
  const circleMode = {
    banner: false
  };
  return <div style={{display:"block"}}> <LocationPicker pointMode={pointMode} circleMode={circleMode} showInputs={false}  startPort="auto"  showControls={false} /></div>;
};

export default MapApp;
