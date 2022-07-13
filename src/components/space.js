import React, { useState } from "react";

function Space(props) {
  const [plate, setPlate] = useState("");
  return (
    <div
      className="space-container"
      style={{ border: "1px solid green", padding: "5px" }}
    >
      <p>Group: {props.group}</p>
      <p>{props.plate || "available"}</p>
      {props.available && (
        <div>
          <input
            placeholder="Enter car's plate number"
            type={"text"}
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
          />
          <button
            disabled={!plate || props.plate}
            onClick={() => {
              if (props.registeredCars.indexOf(plate) > -1) {
                alert(`Car with plate ${plate} already exist!`);
                return;
              } else {
                props.registerPlate(plate, props.levelName, props.id);
                setPlate("");
              }
            }}
          >
            Register new Car
          </button>
        </div>
      )}
      {props.plate && <h3>{props.plate}</h3>}
      {!props.available && (
        <button
          onClick={() =>
            props.unregisterPlate(props.plate, props.levelName, props.id)
          }
        >
          Unregister car
        </button>
      )}
    </div>
  );
}

export default Space;
