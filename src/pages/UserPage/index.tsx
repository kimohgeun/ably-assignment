import React from "react";
import UserPageTemplate from "~/pages/UserPage/UserPageTemplate";
import UserCard from "~/pages/UserPage/UserCard";

function UserPage() {
  return (
    <UserPageTemplate>
      <UserCard />
    </UserPageTemplate>
  );
}

export default UserPage;
