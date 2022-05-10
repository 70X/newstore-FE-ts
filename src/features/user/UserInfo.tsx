import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { IUser } from "./UserModel";

type UserInfoType = {
  user: IUser,
};

const UserInfo: React.FC<UserInfoType> = (props: UserInfoType) => {
  const {
    user: {
      avatarUrl,
      name,
      githubId,
      following,
      follower,
      starredRepositories,
      twitterUsername,
      organizations },
  } = props;
  return <Box display="flex" flexDirection="column" m={2}>
    <Box display="flex" alignItems="center">
      <Avatar alt={name} src={avatarUrl} />
      <Typography ml={2}>{name} ({githubId})</Typography>
    </Box>
    <Box mt={2}>
      Following: {following} | Follower: {follower} | Stars: {starredRepositories}
    </Box>
    <Box mt={2}>
      Twitter: {twitterUsername}
    </Box>
    <Box>
      <List>
        {organizations.slice(0,10).map(({ avatarUrl }, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar>
                <Avatar alt={`organization-${index}`} src={avatarUrl} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`organization-${index}`}
            />
          </ListItem>),
        )}
      </List>
    </Box>
  </Box>
};

export default UserInfo;
