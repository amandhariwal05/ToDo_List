let todoitems = ([]);

export const getTasks = () => todoitems;

export const addTask = (taskfield, datefield) => {
    if(taskfield.trim() !== ""){
      todoitems = [...todoitems, { id: Date.now(), name: taskfield, date: datefield }];
    }
  }

export const removeTask = (id) => {
    todoitems = todoitems.filter(item => item.id !== id);
  }