import React, {useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    console.log("Button Clicked");
    setCount(prevState => prevState +1)
    setCount(prevState => prevState +1) //man måste inte skriva prevstate, man kan skriva x om man vill
    //då kommer den plussa 2x istället för 1,2,3 osv.
    //annars setCOunt(count +1);
  };
  const decrement = () => {
    console.log("Button Clicked");
    setCount(prevState => prevState -1)
    setCount(prevState => prevState -1) //man måste inte skriva prevstate, man kan skriva x om man vill
    //då kommer den plussa 2x istället för 1,2,3 osv.
    //annars setCOunt(count +1);
  };

  console.log("Rendering...");
  return (
    <div>
      <p>You have clicked {count} times to increase.</p>
      <button onClick={increment}>Click to increase +</button>
      <button onClick={decrement}>Click to decrese -</button>
    </div>
  );
}

export default Counter;