import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function TaskPage() {
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-slate-500 p-6 text-white">
      <div className="w-[500px] space-y-4">
        <button
          className="absolute left-0 top-0 bottom-0"
          onClick={() => navigate(-1)}
        >
          <ChevronLeftIcon />
        </button>
        <div>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da tarefa
          </h1>
        </div>

        <div className="bg-slate-200 p-4 roudend-md">
          <h2 className="text-xl  font-bold text-slate-600">{title} </h2>
          <p className="text-slate-600">{description} </p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
