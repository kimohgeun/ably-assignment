import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ResetPasswordPage } from "~/pages";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback="로딩중...">
          <Route path="/reset-password" component={ResetPasswordPage} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
