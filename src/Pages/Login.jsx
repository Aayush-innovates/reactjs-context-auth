import { useState } from "react";
import { userContext } from "../context/userContext";
import { useContext } from "react";

export default function () {
  const [value, setValue] = useState("");
  const { state, dispatch } = useContext(userContext);
  function handleSubmit(e) {
    e.preventDefault();
    //setUser(value);
    dispatch({ type: "login", payload: value });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
