import React from "react";
import Level from "../components/level";
import Space from "../components/space";
import { connect } from "react-redux";

function Garage(props) {
  return (
    <div className="garage-container">
      <h1>{props.garage.name}</h1>
      <button
        onClick={() => {
          props.addLevel(props.garage.levels.length + 1);
        }}
      >
        Add new level
      </button>
      <ul style={{ listStyle: "none" }}>
        {props.garage.levels.map((level) => {
          return (
            <li key={level.id}>
              <Level
                addSpaces={props.addSpaces}
                name={level.name}
                removable={level.name === props.garage.levels.length}
                removeLevel={props.removeLevel}
                spaceAmount={level.spaces.length}
                availableAmount={
                  level.spaces.filter((space) => space.available).length
                }
                spaces={level.spaces.map((space) => {
                  return (
                    <Space
                      registeredCars={props.garage.registered}
                      key={space.id}
                      available={space.available}
                      plate={space.plate}
                      registerPlate={props.registerPlate}
                      unregisterPlate={props.unregisterPlate}
                      levelName={level.name}
                      id={space.id}
                      group={space.group}
                    />
                  );
                })}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
const mapStateToProps = ({ garageStore }) => ({
  garage: garageStore,
});

const mapDispatchToProps = (dispatch) => ({
  addLevel: (numberOfSpaces) =>
    dispatch({ type: "ADD_LEVEL", payload: numberOfSpaces }),
  addSpaces: (levelName, numberOfSpaces, group) =>
    dispatch({
      type: "ADD_SPACES",
      payload: { levelName, numberOfSpaces, group },
    }),
  registerPlate: (plate, levelName, spaceId) =>
    dispatch({
      type: "REGISTER_PLATE",
      payload: { plate, levelName, spaceId },
    }),
  unregisterPlate: (plate, levelName, spaceId) =>
    dispatch({
      type: "UNREGISTER_PLATE",
      payload: { plate, levelName, spaceId },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Garage);
