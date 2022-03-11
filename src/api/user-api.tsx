import { User } from "../model/user";

export const logIn = (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Asun",
      });
    }, 500);
  });
};
