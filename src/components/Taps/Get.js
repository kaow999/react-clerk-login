import * as React from "react";
import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MediaCard from "../Card";

function Get() {
  const [data, setData] = useState({ data: [] });
  const [err, setErr] = useState("");

  const handleClick = async () => {
    await axios
      .get("http://localhost:1337/api/medias?populate=*", {
        headers: {
          Accept: "application/json",
        },
      })
      .then(function (response) {
        setData(response.data);
        console.log(
          "dataaaaaa",
          response.data.data[0].attributes.image.data.attributes.url
        );
      })
      .catch(function (error) {
        setErr(err.message);
        console.log(error);
      })
      .finally(function () {
      });
  };

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
        <Box sx={{ mx: "auto", my: "10px" }} centered>
          <Button variant="contained" size="small" onClick={handleClick}>
            Get Items
          </Button>
        </Box>
        <Box centered>
          {data.data.map((res) => {
            return (
              <div>
                <MediaCard
                  name={res.attributes.name}
                  image={res.attributes.image.data.attributes.url}
                />
                <br />
              </div>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default Get;
