import React from "react";
import { useResetPassword } from "~/hooks/store";
import { Box, Typography, Stepper, Step, StepLabel } from "@mui/material";

function ResetPasswordStepper() {
  const steps = ["이메일", "본인 인증", "새 비밀번호"];
  const { activeStep } = useResetPassword();

  return (
    <Box sx={{ "& > *": { padding: "30px 0" } }}>
      <Typography variant="h6" component="h3" align="center">
        비밀번호 재설정
      </Typography>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default ResetPasswordStepper;
