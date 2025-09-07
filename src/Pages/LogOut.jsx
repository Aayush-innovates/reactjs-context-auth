import { useContext } from "react";
import { userContext } from "../context/userContext";

export default function LogOut() {
  const { dispatch } = useContext(userContext);
  return (
    <>
      <button
        onClick={() => {
          //setUser("Guest");
          dispatch({ type: "logout", payload: "Guest" });
        }}
      >
        Log out
      </button>
    </>
  );
}
