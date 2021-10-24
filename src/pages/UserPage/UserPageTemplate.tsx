import React from "react";
import styled from "styled-components";

interface UserPageTemplateProps {
  children?: React.ReactNode;
}

function UserPageTemplate({ children }: UserPageTemplateProps) {
  return <Template>{children}</Template>;
}

const Template = styled.div`
  padding: 20px;
`;

export default UserPageTemplate;
