import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { LoginPage, ResetPasswordPage } from "~/pages";

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback="로딩중...">
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/reset-password" component={ResetPasswordPage} />
          <Redirect path="*" to="/login" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
