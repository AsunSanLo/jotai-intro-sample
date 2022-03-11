import { atom } from "jotai";
import { getTasks } from "../api/tasks-api";
import { Task } from "../model/task";

export type UpdateTaskData = {
  id: number;
  fields: Partial<Task>;
};

export const tasksAtom = atom<Task[]>([]);

export const addTaskAtom = atom<null, Task>(null, (get, set, newTask) => {
  const tasks = get(tasksAtom);
  set(tasksAtom, [...tasks, newTask]);
});

export const removeTaskAtom = atom<null, number>(null, (get, set, taskId) => {
  const tasks = get(tasksAtom);
  set(
    tasksAtom,
    tasks.filter((item) => item.id !== taskId)
  );
});

export const updateTaskAtom = atom<null, UpdateTaskData>(
  null,
  (get, set, updateData) => {
    const tasks = get(tasksAtom);
    set(
      tasksAtom,
      tasks.map((item) =>
        item.id === updateData.id
          ? {
              ...item,
              ...updateData.fields,
            }
          : item
      )
    );
  }
);

export const fetchTasksAtom = atom<null, number>(
  null,
  async (_, set, userId) => {
    const userTasks = await getTasks(userId);
    set(tasksAtom, userTasks);
  }
);

export const getLastIdAtom = atom<() => number>((get) => () => {
  const tasks = get(tasksAtom);
  return Math.max(0, ...tasks.map((item) => item.id));
});

export const lastIdAtom = atom<number>((get) => {
  const tasks = get(tasksAtom);
  return Math.max(0, ...tasks.map((item) => item.id));
});
