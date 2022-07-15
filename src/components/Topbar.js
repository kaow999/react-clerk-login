import React from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function TopBar() {
  const { user } = useUser();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
              {user ? <h2>{user.fullName}</h2> : null}
            </Typography>
            <UserButton />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default TopBar;
