import React from "react";
import { useResetPassword } from "~/hooks/store";
import ResetPasswordStepper from "~/pages/ResetPasswordPage/ResetPasswordStepper";
import CheckEmailForm from "~/pages/ResetPasswordPage/CheckEmailForm";
import CheckAuthNumForm from "~/pages/ResetPasswordPage/CheckAuthNumForm";

function ResetPasswordPage() {
  const { ResetPasswordStep, activeStep } = useResetPassword();
  return (
    <>
      <ResetPasswordStepper />
      {ResetPasswordStep.checkEmail === activeStep && <CheckEmailForm />}
      {ResetPasswordStep.checkAuthCode === activeStep && <CheckAuthNumForm />}
    </>
  );
}

export default ResetPasswordPage;
