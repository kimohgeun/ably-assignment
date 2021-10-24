import React from "react";
import styled from "styled-components";

interface LoginPageTemplateProps {
  children?: React.ReactNode;
}

function LoginPageTemplate({ children }: LoginPageTemplateProps) {
  return <Template>{children}</Template>;
}

const Template = styled.div`
  height: 100vh;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default LoginPageTemplate;
