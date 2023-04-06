import { useState } from "react";
import AddTask from "./AddTask";

const initialList = [];

const List = () => {
  const [listItems, setListItems] = useState(initialList);

  function handleRemove(id) {
    const newList = listItems.filter((item) => item.id !== id);

    setListItems(newList);
  }
  return (
    <section>
      <ol>
        {listItems.map((item) => (
          <li key={item.id}>
            <span>{item.task}</span>
            <button type="button" onClick={() => handleRemove(item.id)}>
              X
            </button>
          </li>
        ))}
      </ol>
      <AddTask setListItems={setListItems} listItems={listItems} />
    </section>
  );
};

export default List;
