import React from "react";
import "./App.css";
import Header from "./components/header";
import Entry from "./components/Entry";
import Contact from "./components/Contact";
import Joke from "./components/Joke";
import JokesData from "./JokesData";
import EntriesData from "./EntriesData";

const EntryElement = EntriesData.map((entry) => {
  return (
    <Entry
      key={entry.id}
      {...entry}
    />
  )
});



function App() {
  //  const JokesEl = JokesData.map((jk) => {
  //   return <Joke {...jk} />;
  // });
  return (
    <>
      <Header /> 
      {EntryElement}
      {/* {JokesEl} */}
    </>
  );
}

export default App;
