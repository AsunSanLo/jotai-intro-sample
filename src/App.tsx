import { Provider } from "jotai";
import { Header } from "./modules/app/header";
import { TasksPanel } from "./modules/app/tasks-panel";
import { Footer } from "./modules/app/footer";
import styled from "styled-components";

const ContentWrapper = styled.div`
  padding: 2rem;
`;

function App() {
  console.log("Render::App");
  return (
    <Provider>
      <Header />
      <ContentWrapper>
        <TasksPanel />
      </ContentWrapper>
      <Footer />
    </Provider>
  );
}

export default App;
