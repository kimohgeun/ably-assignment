import React, { useState } from "react";
import { validateEmail } from "~/utils";
import { useHistory } from "react-router-dom";
import { useToast, useResetPassword } from "~/hooks/store";
import { useQuery } from "react-query";
import { resetPasswordAPI } from "~/apis";
import { AxiosError } from "axios";
import {
  Box,
  TextField,
  ButtonGroup,
  Button,
  CircularProgress,
} from "@mui/material";

function CheckEmailForm() {
  const history = useHistory();
  const { openToast } = useToast();
  const {
    ResetPasswordStep,
    resetState,
    setEmail,
    setRemainMillisecond,
    setIssueToken,
    setActiveStep,
  } = useResetPassword();

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    checkEmailQuery.refetch();
  };

  const handlePrev = () => {
    resetState();
    history.push("/login");
  };

  const checkEmailQuery = useQuery(
    ["checkEmail"],
    () => resetPasswordAPI.checkEmail(formData.email),
    {
      enabled: false,
      retry: 0,
      onSuccess: (data) => {
        const { email } = formData;
        const { remainMillisecond, issueToken } = data;
        setEmail(email);
        setRemainMillisecond(remainMillisecond);
        setIssueToken(issueToken);
        setActiveStep(ResetPasswordStep.checkAuthCode);
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
    <Box
      sx={{ "& > * + *": { marginTop: "30px" } }}
      component="form"
      onSubmit={handleSubmit}
    >
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
      <ButtonGroup fullWidth>
        <Button size="large" onClick={handlePrev}>
          이전
        </Button>
        <Button
          size="large"
          variant="contained"
          type="submit"
          disabled={
            !validateEmail(formData.email) || checkEmailQuery.isFetching
          }
        >
          {checkEmailQuery.isFetching ? (
            <CircularProgress size="1.5rem" />
          ) : (
            "다음"
          )}
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default CheckEmailForm;
