import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Template = () => {
  return (
    <TemplateDiv>
      <Outlet></Outlet>
    </TemplateDiv>
  );
};
export default Template;

const TemplateDiv = styled.div`
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
