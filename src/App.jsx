import { useState } from "react";
import AddTask from "./componentes/AddTask";
import Tasks from "./componentes/Tasks";
import "./index.css";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programaçaõ",
      description: "Estudar programaão para se tornar desenvolvedor full stack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Ingles",
      description: "Estudar programaão para se tornar desenvolvedor full stack",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Portugues",
      description: "Estudar programaão para se tornar desenvolvedor full stack",
      isCompleted: false,
    },
  ]);

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador De Tarefas
        </h1>
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTask={deleteTask}
        />
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
      </div>
    </div>
  );
}

export default App;
