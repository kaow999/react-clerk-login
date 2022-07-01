import React from "react";
import { UserButton, useUser } from "@clerk/clerk-react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

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
            <Link href="https://app.circleci.com/pipelines/github/kaow999" underline="none" color="#fff" sx={{ flex: 1 }}>
              {'GitHub-Action'}
            </Link>
            <Link href="https://console.firebase.google.com/u/0/project/login-clerk/overview" underline="none" color="#fff" sx={{ flex: 1 }}>
              {'Firebase'}
            </Link>
            <UserButton />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default TopBar;
