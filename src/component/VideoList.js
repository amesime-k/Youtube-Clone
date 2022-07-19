import React from "react";
import VideoItem from "./VideoItem";
import { Grid } from "@material-ui/core";

function VideoList({ videos,onSelect }) {
  const listOfVideos = videos.map((video) => {console.log(video)
    return <VideoItem key={video.id.videoId} video={video} onSelect={ onSelect} />}
    
  );

  return <Grid container spacing={10}>{listOfVideos}</Grid>;
}

export default VideoList;
