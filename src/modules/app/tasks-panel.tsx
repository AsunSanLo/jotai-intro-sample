import { useAtom } from "jotai";
import { Suspense } from "react";
import { userAtom } from "../../atoms/user-atoms";
import { SpinnerFlat } from "../shared/spinner-flat";
import { TaskForm } from "./tasks-panel/tasks-form";
import { TasksList } from "./tasks-panel/tasks-list";
export const TasksPanel = () => {
  console.log("Render::JotaiTasks");
  const [user] = useAtom(userAtom);

  return (
    <div>
      {user ? (
        <Suspense fallback={<SpinnerFlat />}>
          <TasksList />
          <br />
          <TaskForm />
        </Suspense>
      ) : (
        "Please, log in to see your tasks list"
      )}
    </div>
  );
};
