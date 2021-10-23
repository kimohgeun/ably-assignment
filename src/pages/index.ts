import { lazy } from "react";

const LoginPage = lazy(() => import("~/pages/LoginPage"));
const ResetPasswordPage = lazy(() => import("~/pages/ResetPasswordPage"));

export { LoginPage, ResetPasswordPage };
