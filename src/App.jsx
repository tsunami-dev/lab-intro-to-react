import React from "react";
import Contacts from "./Components/Contacts";
import UserProfile from "./Components/UserProfile";
import NavBar from "./Components/NavBar";
import Posts from "./Components/Posts";
import "./index.css";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <p>welcome</p>
      <UserProfile/>
      <p>whats going on in the hub?</p>
      <Posts/>
      <Contacts/>

    </div>
  )
}

export default App;
