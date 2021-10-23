import { useCallback } from "react";
import { useAppSelector, useAppDispatch } from "~/store";
import { ToastPayload, openToast, closeToast } from "~/store/toastSlice";

const useToast = () => {
  const { open, severity, message, autoHideDuration } = useAppSelector(
    (state) => state.toast,
  );

  const dispatch = useAppDispatch();

  return {
    open,
    severity,
    message,
    autoHideDuration,
    openToast: useCallback(
      (payload: ToastPayload) => dispatch(openToast(payload)),
      [dispatch],
    ),
    closeToast: useCallback(() => dispatch(closeToast()), [dispatch]),
  };
};

export default useToast;
