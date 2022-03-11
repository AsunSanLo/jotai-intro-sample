import { useAtom } from "jotai";
import { useRef } from "react";
import { addTaskAtom, getLastIdAtom } from "../../../atoms/tasks-atoms";

export const TaskForm = () => {
  console.log("Jotai::Render::TaskForm");

  const titleRef = useRef<HTMLInputElement>(null);

  const [, addTask] = useAtom(addTaskAtom);
  const [getLastId] = useAtom(getLastIdAtom);

  const onAddTask = () => {
    if (!titleRef.current?.value) return;
    addTask({
      title: titleRef.current.value,
      id: getLastId() + 1,
      done: false,
    });
    titleRef.current.value = "";
  };

  return (
    <div>
      <h4>➕ Create new task</h4>
      <input
        type="text"
        placeholder="Task title"
        ref={titleRef}
        onKeyDown={(e) => e.key === "Enter" && onAddTask()}
      />
      <button onClick={onAddTask}>Create</button>
    </div>
  );
};
