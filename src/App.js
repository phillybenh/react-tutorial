import React, { useState } from "react";
// import Hello from './sayHello';
import Tweet from "./tweet.js";

function App() {
  // const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  //   setRed(!isRed);
  // }
  const [users, setUsers] = useState([
    { name: "Ben", message: "Hello there" },
    { name: "Kimby", message: "I'm hungry" },
    { name: "Maury", message: "Meowmeow" }
  ]);


  return (
    <div className="app">
      {/* <h1 className={isRed ? 'red' : ''}>Change my color</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1> */}

      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}
export default App;




      {
        /* <Tweet name="Dev ED" message="random tweet" likes="57" />
      <Tweet name="John Snow" message="random tweet" likes="57" />
      <Tweet name="Bob" message="random tweet" likes="57" />
      <Tweet name="Mosh" message="tweet" likes="57" />
      <Tweet name="Dev Ben" message="best tweet ever" likes="57" /> */
      }
