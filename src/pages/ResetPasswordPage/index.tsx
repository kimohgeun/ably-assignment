import React from "react";
import { Helmet } from "react-helmet";
import { useResetPassword } from "~/hooks/store";
import ResetPasswordStepper from "~/pages/ResetPasswordPage/ResetPasswordStepper";
import CheckEmailForm from "~/pages/ResetPasswordPage/CheckEmailForm";
import CheckAuthNumForm from "~/pages/ResetPasswordPage/CheckAuthNumForm";
import ResetPasswordForm from "~/pages/ResetPasswordPage/ResetPasswordForm";

function ResetPasswordPage() {
  const { ResetPasswordStep, activeStep } = useResetPassword();
  return (
    <>
      <Helmet>
        <title>에이블리 - 비밀번호 재설정</title>
      </Helmet>
      <ResetPasswordStepper />
      {ResetPasswordStep.checkEmail === activeStep && <CheckEmailForm />}
      {ResetPasswordStep.checkAuthCode === activeStep && <CheckAuthNumForm />}
      {ResetPasswordStep.resetPassword === activeStep && <ResetPasswordForm />}
    </>
  );
}

export default ResetPasswordPage;
