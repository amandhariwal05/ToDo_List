import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/Heading.jsx";
import AddToDoItems from "./components/AddToDoItems.jsx";
import ToDoItems from "./components/ToDoItems.jsx";
import EmptyList from "./components/EmptyList.jsx";
import { getTasks, addTask, removeTask } from "./store/store.js";
import { useState } from "react";

function App() {
  const [todoitems, setTodoitems] = useState(getTasks());

  const handleAddTask = (taskfield, datefield) => {
    addTask(taskfield, datefield);
    setTodoitems(getTasks());
  };

  const handleRemoveTask = (id) => {
    removeTask(id);
    setTodoitems(getTasks());
  };

  return (
    <div className="mainDiv">
      <div className="childdiv">
        <Heading></Heading>
        <AddToDoItems addtask={handleAddTask}></AddToDoItems>
        {todoitems.length === 0 && <EmptyList></EmptyList>}
        <ToDoItems
          todoitems={todoitems}
          removetask={handleRemoveTask}
        ></ToDoItems>
      </div>
    </div>
  );
}

export default App;
