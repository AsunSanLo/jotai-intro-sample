import { Task } from "../model/task";

export const getTasks = (userId: number): Promise<Task[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: `Task 1 for user id ${userId}`
        },
      ] as Task[]);
    }, 2000);
  });
};
