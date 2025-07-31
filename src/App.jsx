import { useFormState } from "react-dom";
import NumberGuessGame from "./components/NumberGuessGame";
import { useState } from "react";

const App = () => {
  return (
    <div className="bg-yellow-100 min-h-screen flex justify-center items-center">
      <NumberGuessGame />
    </div>
  );
};

export default App;
