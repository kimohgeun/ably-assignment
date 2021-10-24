import React from "react";
import { Helmet } from "react-helmet";
import LoginForm from "~/pages/LoginPage/LoginForm";
import LoginPageTemplate from "~/pages/LoginPage/LoginPageTemplate";

function LoginPage() {
  return (
    <LoginPageTemplate>
      <Helmet>
        <title>에이블리 - 로그인</title>
      </Helmet>
      <LoginForm />
    </LoginPageTemplate>
  );
}

export default LoginPage;
