import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow fkex fkex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Digite a Descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <button
        onClick={() => {
          if (!title || !description) {
            return alert("Preencha os dados");
          }

          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
