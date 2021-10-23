import { useCallback } from "react";
import { useAppSelector, useAppDispatch } from "~/store";
import {
  ResetPasswordStep,
  setActiveStep,
  setEmail,
  setRemainMillisecond,
  setIssueToken,
  setConfirmToken,
  resetState,
} from "~/store/resetPasswordSlice";

const useResetPassword = () => {
  const { activeStep, email, remainMillisecond, issueToken, confirmToken } =
    useAppSelector((state) => state.resetPassword);

  const dispatch = useAppDispatch();

  return {
    ResetPasswordStep,
    activeStep,
    email,
    remainMillisecond,
    issueToken,
    confirmToken,
    setActiveStep: useCallback(
      (payload: ResetPasswordStep) => dispatch(setActiveStep(payload)),
      [dispatch],
    ),
    setEmail: useCallback(
      (payload: string) => dispatch(setEmail(payload)),
      [dispatch],
    ),
    setRemainMillisecond: useCallback(
      (payload: number) => dispatch(setRemainMillisecond(payload)),
      [dispatch],
    ),
    setIssueToken: useCallback(
      (payload: string) => dispatch(setIssueToken(payload)),
      [dispatch],
    ),
    setConfirmToken: useCallback(
      (payload: string) => dispatch(setConfirmToken(payload)),
      [dispatch],
    ),
    resetState: useCallback(() => dispatch(resetState()), [dispatch]),
  };
};

export default useResetPassword;
