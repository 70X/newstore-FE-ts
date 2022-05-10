import React from "react";
import { Box } from "@mui/material";
import Layout from "./Layout";

const Fallback: React.FC = () => {
  return <Layout>
    <Box display="flex" alignItems="center" justifyContent="center" width="100%">
      Resource Not Found
    </Box>
  </Layout>
};

export default Fallback;
