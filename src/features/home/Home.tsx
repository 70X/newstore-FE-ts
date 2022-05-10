import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Layout } from "../shared";
import { useNavigate } from "react-router-dom";


const Home: React.FC = () => {
  const [userValue, setUserValue] = React.useState<string>('');
  const navigate = useNavigate();

  const goToPage = () => {
    navigate(`/user/${userValue}`);
  }

  return <Layout>
    <Box display="flex" justifyContent="center" alignItems="center" width="100%">
      <Box display="flex" flexDirection="column">
        <TextField label="Username" variant="outlined" value={userValue} onChange={({ target: { value } }) => setUserValue(value)} />
        <Button variant="outlined" sx={{ mt: 2 }} disabled={(userValue || '').length < 3} onClick={goToPage}>Ok</Button>
      </Box>
    </Box>
  </Layout>
};

export default Home;
