import React from "react";
import moment from "moment";
import { useGetUser, useLogout } from "~/hooks/query";
import {
  Skeleton,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

function UserCard() {
  const getUserQuery = useGetUser();
  const logoutQuery = useLogout();

  const handleLogout = () => {
    logoutQuery.mutate();
  };

  return (
    <Card>
      {getUserQuery.isLoading ? (
        <>
          <Skeleton variant="rectangular" height="400px" />
          <Skeleton variant="text" width="200px" />
          <Skeleton variant="text" width="200px" />
          <Skeleton variant="text" width="200px" />
        </>
      ) : (
        <>
          <CardMedia
            component="img"
            height="400px"
            image={getUserQuery.data?.profileImage}
            alt="유저 이미지"
          />
          <CardContent>
            <Typography variant="h6">{getUserQuery.data?.name}</Typography>
            <Typography>{getUserQuery.data?.email}</Typography>
            <Typography>
              {`마지막 접속 일자 : ${
                getUserQuery.data &&
                moment(getUserQuery.data.lastConnectedAt).format("YYYY-MM-DD")
              }`}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={handleLogout}>로그아웃</Button>
          </CardActions>
        </>
      )}
    </Card>
  );
}

export default UserCard;
