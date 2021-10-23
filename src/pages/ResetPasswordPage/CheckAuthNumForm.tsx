import React, { useState, useEffect } from "react";
import moment from "moment";
import { useToast, useResetPassword } from "~/hooks/store";
import { useMutation } from "react-query";
import { resetPasswordAPI } from "~/apis";
import { AxiosError } from "axios";
import {
  Box,
  TextField,
  Typography,
  ButtonGroup,
  Button,
  CircularProgress,
} from "@mui/material";

function CheckAuthNumForm() {
  const { openToast } = useToast();
  const {
    ResetPasswordStep,
    resetState,
    setConfirmToken,
    setActiveStep,
    setRemainMillisecond,
    email,
    remainMillisecond,
    issueToken,
  } = useResetPassword();

  const [formData, setFormData] = useState({
    authCode: "",
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
      resetPasswordAPI.checkAuthCode({
        email,
        issueToken,
        authCode: formData.authCode,
      }),
    {
      onSuccess: (data) => {
        const { confirmToken } = data;
        setConfirmToken(confirmToken);
        setActiveStep(ResetPasswordStep.resetPassword);
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

  useEffect(() => {
    const countdown = setInterval(() => {
      if (remainMillisecond > 0) {
        setRemainMillisecond(remainMillisecond - 1000);
      } else {
        clearInterval(countdown);
        openToast({
          severity: "error",
          message: "인증 시간이 만료되었습니다.",
        });
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [remainMillisecond]);

  return (
    <Box
      sx={{ "& > * + *": { marginTop: "30px" } }}
      component="form"
      onSubmit={handleSubmit}
    >
      <TextField
        fullWidth
        placeholder="인증코드"
        name="authCode"
        value={formData.authCode}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <Typography color="blue">
              {moment(remainMillisecond).format("mm:ss")}
            </Typography>
          ),
        }}
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
            !formData.authCode ||
            !remainMillisecond ||
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

export default CheckAuthNumForm;
