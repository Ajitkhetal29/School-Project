import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import StudentList from "./components/StudenList";
import AddStudent from "./components/AddStudent";

import "./App.css";

function App() {
  const [selectedTab, setSelectedTab] = useState("StudentList");

  return (
    <>
      <Navbar
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      ></Navbar>

      {selectedTab === "StudentList" ? (
        <StudentList></StudentList>
      ) : (
        <AddStudent></AddStudent>
      )}
    </>
  );
}

export default App;
