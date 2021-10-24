import React from "react";
import { Helmet } from "react-helmet";
import UserPageTemplate from "~/pages/UserPage/UserPageTemplate";
import UserCard from "~/pages/UserPage/UserCard";

function UserPage() {
  return (
    <UserPageTemplate>
      <Helmet>
        <title>에이블리 - 내 정보</title>
      </Helmet>
      <UserCard />
    </UserPageTemplate>
  );
}

export default UserPage;
