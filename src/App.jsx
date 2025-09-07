import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import { UserProvider } from "./context/userContext";
import LogOut from "./Pages/LogOut";

function App() {
  return (
    <>
      {/* <input
        type="text"
        onChange={(e) => {
          setUser(e.target.value);
        }}
        value={user}
      /> */}
      <UserProvider>
        <Login />
        <Checkout />
        <LogOut />
      </UserProvider>
    </>
  );
}

export default App;
