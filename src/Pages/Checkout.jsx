import { useContext } from "react";
import { userContext } from "../context/userContext";

export default function Checkout() {
  const value = useContext(userContext);
  return (
    <>
      <h1>Checkout as {value.user}</h1>
    </>
  );
}
