import { useAtom } from "jotai";
import styled from "styled-components";
import { logIn } from "../../api/user-api";
import { userAtom } from "../../atoms/user-atoms";

const HeaderWrapper = styled.header`
  background-color: #00b5f12b;
  width: 100%;
  padding: 1.2rem;
  box-sizing: border-box;
`;
export const Header = () => {
  console.log("Render::JotaiHeader");
  const [user, setUser] = useAtom(userAtom);

  const onLogIn = async () => {
    const loggedUser = await logIn();
    setUser(loggedUser);
  };
  return (
    <HeaderWrapper>
      <h1>Jotai sample</h1>
      <h2>Welcome 🙌</h2>
      {user ? (
        <p>
          Logged in as <strong>{user.name}</strong>{" "}
          <button onClick={() => setUser(null)}>Log out</button>
        </p>
      ) : (
        <button onClick={onLogIn}>Log in</button>
      )}
    </HeaderWrapper>
  );
};
