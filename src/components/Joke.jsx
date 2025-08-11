import React from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);
  function handleClick() {
    setIsShown((prevShown) => !prevShown);
  }
// const [message,setMessage] = React.useState([])    


  return (
    <>
      <p>Set up: {props.setup}</p>
      <button onClick={handleClick}>{isShown ? "hide" : "show"}</button>
      <br />

      {isShown && <p>{props.punchline}</p>}
      <hr />
       
       
          {/* <h1>{
              (message.length == 0) ? ("You are all caught up") :
                  (
                      (message.length == 1) ? "You have 1 unread message" : (`You have ${message.length} unread messages`)
                  )
              }</h1> */}
    </>
  );
}
