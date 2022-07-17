import React, { useState } from "react";
// import axios from "axios";
import { Grid } from "@material-ui/core";
import { SearchBar, VideoDetail, VideoList } from '../src/component'
import youtube from '../src/api/youtube'

function App() {
    const [videos, setVideos] = useState({
        videos: [],
        selectedVideo : null
    })
    const handleSubmit = async (searchTerm) => {
        const response = await youtube.get("search", {
          params: {
            q: searchTerm,
          },
        });
        setVideos({
            video: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }
    console.log(videos.selectedVideo)
  return (
    <Grid justifyContent="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container  spacing={10}>
          <Grid item  xs={12}>
                      <SearchBar onFormSubmit={ handleSubmit} />
          </Grid>
          <Grid item xs={8}>
                      <VideoDetail video={ videos.selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            {/* Video title */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
