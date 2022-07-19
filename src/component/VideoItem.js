import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

function VideoItem({ video, onSelect }) {
  return (
    <Grid item xs={12}>
      <Paper style={{ display: "flex", alignItems: "center" }}>
        <img
          style={{ marginRight: "20px", cursor: "pointer" }}
          src={video.snippet.thumbnails.medium.url}
          alt="thumbnail"
          onClick={() => onSelect(video)}
        />
        <Typography variant="subtitle1"> {video.snippet.title}</Typography>
      </Paper>
    </Grid>
  );
}

export default VideoItem;
