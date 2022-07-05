import React from "react";
import AppBar from "../AppBar";
import "./index.css";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

function Main() {
  const [star, setStar] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <>
      <AppBar />
      <div className="content">
        <Box
          sx={{
            width: 200,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Rating
            name="hover-feedback"
            value={star}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {
              setStar(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          {star !== null && (
            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : star]}</Box>
          )}
        </Box>
      </div>
    </>
  );
}

export default Main;
