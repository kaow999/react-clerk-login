import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard({ name, image }) {
  return (
    <Card sx={{ maxWidth: "fitContent" }}>
      <CardMedia
        component="img"
        height="240"
        alt="image"
        image={`http://localhost:1337` + image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
