import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export const GamePage = () => {
  const [guess, setGuess] = useState("");
  const history = useHistory();

  const handleGuess = () => {
    if (guess === "chocolate") {
      history.push("/winner");
    }
  };

  return (
    <div>
      <h1>Game Page</h1>
      <input
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        type="text"
      />

      <button onClick={handleGuess}>Guess</button>
    </div>
  );
};
