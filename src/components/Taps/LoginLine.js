import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import liff from "@line/liff";

function LoginLine() {
  const [data, setData] = useState("");
  async function GetProfile() {
    liff.ready.then(() => {
      liff
        .getProfile()
        .then((profile) => {
          setData(profile);
        })
        .catch((err) => {
          console.log("error", err);
        });
    });
  }
  useEffect(() => {
    GetProfile();
  }, []);

  return (
    <>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          mx: "auto",
          display: "grid",
          gridTemplateRows: "auto",
        }}
      >
        <h1>Hello {data.displayName}</h1>
        <Box sx={{ mx: "auto" }} centered>
          <img src={`${data.pictureUrl}`} height="240" alt="" />
        </Box>

        <Box sx={{ mx: "auto" }} centered>
          <Button
            variant="contained"
            size="small"
            href="https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1657304428&redirect_uri=https://login-clerk.web.app/&state=12345abcde&scope=profile%20openid&nonce=09876xyz"
          >
            Login
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default LoginLine;
