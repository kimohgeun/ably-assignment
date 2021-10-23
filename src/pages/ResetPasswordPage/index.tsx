import React from "react";
import { useResetPassword } from "~/hooks/store";
import ResetPasswordStepper from "~/pages/ResetPasswordPage/ResetPasswordStepper";
import CheckEmailForm from "~/pages/ResetPasswordPage/CheckEmailForm";

function ResetPasswordPage() {
  const { ResetPasswordStep, activeStep } = useResetPassword();
  return (
    <>
      <ResetPasswordStepper />
      {ResetPasswordStep.checkEmail === activeStep && <CheckEmailForm />}
    </>
  );
}

export default ResetPasswordPage;
