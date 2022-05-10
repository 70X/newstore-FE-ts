import React from "react";
import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Layout } from "../shared";
import { getUserInfo } from "./UserAPI";
import UserInfo from "./UserInfo";
import UserRepo from "./UserRepo";
import { IUser } from "./UserModel";


const User: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>();
  const { userid: userId = '' } = useParams();
  const [user, setUser] = React.useState<IUser>();
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      let data: IUser;
      try {
        data = await getUserInfo(userId);
      } catch (error) {
        navigate('/notfound');
        return;
      }
      setUser(data);
      console.log(data);
      setLoading(false);
    }
    userId && fetchUserData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return <Layout loading={loading}>
    {user && (<>
      <Box display="flex" flex={1} sx={{ borderRight: '1px solid #ccc', overflow: 'auto' }}>
        <UserInfo user={user} />
      </Box>
      <Box display="flex" flex={2} sx={{ overflow: 'auto'}}>
        <UserRepo repositories={user.topRepositories} />
      </Box>
    </>)
    }
  </Layout>
};

export default User;
