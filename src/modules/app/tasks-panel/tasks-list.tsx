import { useAtom } from "jotai";
import { useEffect } from "react";
import { getTasks } from "../../../api/tasks-api";
import {
  fetchTasksAtom,
  removeTaskAtom,
  tasksAtom,
  updateTaskAtom
} from "../../../atoms/tasks-atoms";
import { userAtom } from "../../../atoms/user-atoms";
import { Task } from "../../../model/task";

export const TasksList = () => {
  const [tasks] = useAtom(tasksAtom);
  const [user] = useAtom(userAtom);
  const [, fetchTasks] = useAtom(fetchTasksAtom);
  const [, removeTask] = useAtom(removeTaskAtom);
  const [, updateTask] = useAtom(updateTaskAtom);

  console.log("Jotai::Render::TasksList");
  const toggleTask = (task: Task) => {
    updateTask({
      id: task.id,
      fields: {
        done: !task.done,
      },
    });
  };

  useEffect(() => {
    user && fetchTasks(user.id);
  }, [user?.id]);
  return (
    <div>
      <h3>📝 Your tasks list: </h3>
      <div>
        {!tasks.length && <p>No tasks created</p>}
        {tasks.map((item) => (
          <li key={item.id}>
            {item.title}&nbsp;&nbsp;
            <button onClick={() => toggleTask(item)}>
              {item.done ? "✅" : "🕑"}
            </button>
            <button onClick={() => removeTask(item.id)}>❌</button>
          </li>
        ))}
      </div>
    </div>
  );
};
