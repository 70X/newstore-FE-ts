import { Box, Card, CardContent, Link, Typography } from "@mui/material";
import { IRepository } from "./UserModel";

type UserRepoType = {
  repositories: IRepository[],
};

const UserRepo: React.FC<UserRepoType> = (props: UserRepoType) => {
  const { repositories } = props;
  return <Box display="flex" flexDirection="column" m={2} width="100%" height="100%">
    {repositories.map((repo, index) => (
      <Card key={index} sx={{ m: '10px', minHeight: '180px', overflow: 'auto' }}>
        <CardContent>
          <Link href={repo.url} target="_blank"><Typography gutterBottom variant="h5" component="div">{repo.name}</Typography></Link>
          <Typography>{repo.description}</Typography>
          <Typography>{`Primary Language: ${repo.primaryLanguage}`}</Typography>
          <Typography>{`Star Count: ${repo.stargazerCount}`}</Typography>
          <Typography>{`Fork Count: ${repo.forkCount}`}</Typography>
        </CardContent>
      </Card>),
    )}
  </Box>
};

export default UserRepo;
