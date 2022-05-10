import React from "react";
import { Box } from "@mui/material";
import Loading from "./Loading";

type LayoutType = {
  children: React.ReactNode,
  loading?: boolean,
};
const Layout: React.FC<LayoutType> = ({ children, loading }: LayoutType) => {
  const render = loading ? <Box display="flex" width="100%" alignItems="center" justifyContent="center">
    <Loading />
  </Box> : children;
  return <Box display="flex" width="100%" height="100%">
    {render}
  </Box >
};

export default Layout;
