import styled from "styled-components";

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.2rem;
  background-color: #00b5f12b;
`;
export const Footer = () => {
  console.log("Render::Footer");
  return (
    <FooterWrapper>
      <div>I am the footer</div>
    </FooterWrapper>
  );
};
