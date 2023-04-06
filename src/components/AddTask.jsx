import { useState } from "react";

const AddTask = ({ setListItems, listItems }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: listItems.length + 1,
      task: task,
    };
    setListItems([...listItems, newTask]);
    setTask("");
  };

  return (
    <section>
      <form className="AddTask" onSubmit={handleSubmit}>
        <input
          
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <button type="submit" disabled={!task}>
          Add Your Task
        </button>
      </form>
    </section>
  );
};

export default AddTask;
