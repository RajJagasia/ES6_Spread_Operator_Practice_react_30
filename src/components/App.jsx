import React from "react";
import Heading from "./Heading";

let itemList = ["Item 1"];
function App() {
  const [itemName, setItemName] = React.useState("");

  function handleItem(event) {
    setItemName(event.target.value);
  }

  function addItem(event) {
    itemList.push(itemName);
    setItemName("");
  }
  return (
    <div className="container">
      <Heading />
      <div className="form">
        <input type="text" on onChange={handleItem} value={itemName} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemList.map((item) => (
            <li> {item} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
