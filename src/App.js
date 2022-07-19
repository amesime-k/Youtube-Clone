import React, { useEffect, useState } from "react";
// import axios from "axios";
import { Grid } from "@material-ui/core";
import { SearchBar, VideoDetail, VideoList } from '../src/component'
import youtube from '../src/api/youtube'

function App() {
    const [videos, setVideos] = useState({
        videos: [],
        selectedVideo : null
    })
  
 useEffect(() => {
   const initialFetch = async (searchTerm) => {
     const response = await youtube.get("search", {
       params: {
         q: 'React Js',
       },
     });
     setVideos({
       videos: response.data.items,
       selectedVideo: response.data.items[0],
     });
   };
   initialFetch()
 }, [])
  const handleSubmit = async (searchTerm) => {
        const response = await youtube.get("search", {
          params: {
            q: searchTerm,
          },
        });
        setVideos({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }
    
  const onVideoSelect = (video) => {
    setVideos({
      ...videos,
selectedVideo : video
    })
  }
  return (
    <Grid justifyContent="center" container style={{width: "100vw"}}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={videos.selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos.videos} onSelect={onVideoSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
