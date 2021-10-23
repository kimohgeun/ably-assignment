import { lazy } from "react";

const UserPage = lazy(() => import("~/pages/UserPage"));
const LoginPage = lazy(() => import("~/pages/LoginPage"));
const ResetPasswordPage = lazy(() => import("~/pages/ResetPasswordPage"));

export { UserPage, LoginPage, ResetPasswordPage };
