import React, { useState } from "react";

function Level(props) {
  const [spaceAmount, setSpaceAmount] = useState(0);
  const [group, setGroup] = useState("A0");

  return (
    <div className="level-container" style={{ border: "1px solid red" }}>
      <div>
        <h2>Level: {props.name}</h2>
        <p>Number of spaces: {props.spaceAmount}</p>
        <p>Number of spaces available: {props.availableAmount}</p>
        {props.removable && (
          <button onClick={() => props.removeLevel(props.name)}>
            Remove level
          </button>
        )}
        <div className="level-form">
          <p>Number of spaces:</p>
          <input
            type={"number"}
            min={1}
            step={10}
            value={spaceAmount}
            onChange={(e) => setSpaceAmount(e.target.value)}
          />
          <p>Group name:</p>
          <input
            type={"text"}
            value={group}
            onChange={(e) => setGroup(e.target.value)}
          />

          <button
            disabled={spaceAmount <= 0 || !group}
            onClick={() =>
              props.addSpaces(props.name, parseInt(spaceAmount), group)
            }
          >
            Add new spaces
          </button>
        </div>
      </div>
      <div className="flex-row">
        {props.spaces}
      </div>
    </div>
  );
}

export default Level;
