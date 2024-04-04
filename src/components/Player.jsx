import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  // const [submittedPlayerName, setSubmittedPlayerName] = useState(false);

  // function handleChange(event) {
  //   setEnteredPlayerName(event.target.value);
  // }

  function handleClick() {
    // setSubmittedPlayerName(true);
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>
        Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}
      </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
