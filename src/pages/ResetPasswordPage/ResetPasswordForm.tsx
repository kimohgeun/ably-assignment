import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useToast, useResetPassword } from "~/hooks/store";
import { useMutation } from "react-query";
import { resetPasswordAPI } from "~/apis";
import { AxiosError } from "axios";
import {
  Box,
  TextField,
  FormGroup,
  ButtonGroup,
  Button,
  CircularProgress,
} from "@mui/material";

function ResetPasswordForm() {
  const history = useHistory();
  const { openToast } = useToast();
  const { resetState, email, confirmToken } = useResetPassword();

  const [formData, setFormData] = useState({
    newPassword: "",
    newPasswordConfirm: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    checkAuthCodeQuery.mutate();
  };

  const handlePrev = () => {
    resetState();
  };

  const checkAuthCodeQuery = useMutation(
    ["checkEmail"],
    () =>
      resetPasswordAPI.resetPassword({
        email,
        confirmToken,
        newPassword: formData.newPassword,
        newPasswordConfirm: formData.newPassword,
      }),
    {
      onSuccess: () => {
        history.push("/login");
        resetState();
        openToast({
          severity: "success",
          message: "비밀번호가 변경되었습니다.",
        });
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
      <FormGroup sx={{ "& > * + *": { marginTop: "30px" } }}>
        <TextField
          fullWidth
          placeholder="비밀번호"
          type="password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          placeholder="비밀번호 확인"
          type="password"
          name="newPasswordConfirm"
          value={formData.newPasswordConfirm}
          error={
            formData.newPassword !== "" &&
            formData.newPasswordConfirm !== "" &&
            formData.newPassword !== formData.newPasswordConfirm
          }
          helperText={
            formData.newPassword !== "" &&
            formData.newPasswordConfirm !== "" &&
            formData.newPassword !== formData.newPasswordConfirm
              ? "비밀번호가 일치하지 않습니다."
              : ""
          }
          onChange={handleChange}
        />
      </FormGroup>
      <ButtonGroup fullWidth>
        <Button size="large" onClick={handlePrev}>
          처음으로
        </Button>
        <Button
          size="large"
          variant="contained"
          type="submit"
          disabled={
            !(formData.newPassword && formData.newPasswordConfirm) ||
            formData.newPassword !== formData.newPasswordConfirm ||
            checkAuthCodeQuery.isLoading
          }
        >
          {checkAuthCodeQuery.isLoading ? (
            <CircularProgress size="1.5rem" />
          ) : (
            "다음"
          )}
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default ResetPasswordForm;
