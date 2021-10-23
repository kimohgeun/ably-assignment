import React, { Suspense, useEffect } from "react";
import { useUser } from "~/hooks/store";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { LoginPage, ResetPasswordPage } from "~/pages";

function Router() {
  const { token: storeToken, setToken } = useUser();
  const localStorageToken = localStorage.getItem("ABLY_TOKEN");

  useEffect(() => {
    localStorageToken && setToken(localStorageToken);
  }, []);

  if (localStorageToken && !storeToken) return null;
  return (
    <BrowserRouter>
      <Suspense fallback="로딩중...">
        <Switch>
          {storeToken ? (
            <>
              <Route path="/user" component={() => <div>유저</div>} />
              <Redirect path="*" to="/user" />
            </>
          ) : (
            <>
              <Route path="/login" component={LoginPage} />
              <Route path="/reset-password" component={ResetPasswordPage} />
              <Redirect path="*" to="/login" />
            </>
          )}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
