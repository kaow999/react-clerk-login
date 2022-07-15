import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import liff from "@line/liff";

function LoginLine() {
  const [data, setData] = useState("");
  const [login, setLogin] = useState(false);

  const handleClickLogin = async () => {
    if (!liff.isLoggedIn()) {
      liff.login({ redirectUri: "https://login-clerk.web.app/" });
    }
    setLogin(true);
  };

  const handleClickLogOut = async () => {
    if (liff.isLoggedIn()) {
      liff.logout();
    }
    setLogin(false);
  };

  async function GetProfile() {
    liff.ready.then(() => {
      liff
        .getProfile()
        .then((profile) => {
          setData(profile);
          console.log(profile);
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
        <h1>{data.displayName ? `Hello ${data.displayName}` : ""}</h1>
        <Box sx={{ mx: "auto" }} centered>
          <img src={`${data.pictureUrl}`} height="240" alt="" />
        </Box>

        <Box sx={{ mx: "auto" }} centered>
          {login ? (
            <Button
              variant="contained"
              size="small"
              onClick={handleClickLogOut}
            >
              LogOut
            </Button>
          ) : (
            <Button variant="contained" size="small" onClick={handleClickLogin}>
              LogIn
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
}

export default LoginLine;
