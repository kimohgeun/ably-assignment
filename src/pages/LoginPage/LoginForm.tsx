import React, { useState } from "react";
import moment from "moment";
import styled from "styled-components";
import { validateEmail } from "~/utils";
import { Link } from "react-router-dom";
import { useToast, useUser } from "~/hooks/store";
import { useMutation } from "react-query";
import { authAPI } from "~/apis";
import { AxiosError } from "axios";
import { Typography, TextField, Button, CircularProgress } from "@mui/material";

function LoginForm() {
  const { openToast } = useToast();
  const { setToken } = useUser();

  const localStorageLastConnectedAt = localStorage.getItem("LAST_CONNECTED_AT");
  const lastConnectedAt = localStorageLastConnectedAt
    ? new Date(parseInt(localStorageLastConnectedAt))
    : "";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginQuery.mutate();
  };

  const loginQuery = useMutation(
    ["login"],
    () =>
      authAPI.login({
        email: formData.email,
        password: formData.password,
      }),
    {
      onSuccess: (data) => {
        const { accessToken } = data;
        setToken(accessToken);
      },
      onError: (error: AxiosError<any>) => {
        const { message } = error?.response?.data?.error;
        openToast({
          severity: "error",
          message: message,
        });
      },
    },
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Typography variant="h3" component="h1">
        A B L Y
      </Typography>
      {moment(lastConnectedAt, "YYYY-MM-DD").isValid() && (
        <Typography>
          {`마지막 접속 일자 : ${moment(lastConnectedAt).format("YYYY-MM-DD")}`}
        </Typography>
      )}
      <TextField
        fullWidth
        placeholder="이메일"
        name="email"
        value={formData.email}
        error={formData.email !== "" && !validateEmail(formData.email)}
        helperText={
          formData.email !== "" && !validateEmail(formData.email)
            ? "이메일 양식이 올바르지 않습니다."
            : ""
        }
        onChange={handleChange}
      />
      <TextField
        fullWidth
        placeholder="비밀번호"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <Button
        fullWidth
        size="large"
        variant="contained"
        type="submit"
        disabled={
          !(validateEmail(formData.email) && formData.password) ||
          loginQuery.isLoading
        }
      >
        {loginQuery.isLoading ? <CircularProgress size="1.5rem" /> : "로그인"}
      </Button>
      <Button>
        <Link to="/reset-password">비밀번호 재설정</Link>
      </Button>
    </Form>
  );
}

const Form = styled.form`
  text-align: center;
  padding: 40px 0;
  & > * + * {
    margin-top: 30px;
  }
`;

export default LoginForm;
