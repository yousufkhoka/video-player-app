import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import filterReducer from '../features/filters/filterSlice';
import relatedVideosReducer from '../features/relatedVideos/relatedVideosSlice';
import tagsReducer from '../features/tags/tagsSlice';
import videoReducer from '../features/video/videoSlice';
import videosReducer from '../features/videos/videosSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    videos: videosReducer,
    tags: tagsReducer,
    video: videoReducer,
    relatedVideos:relatedVideosReducer,
    filter:filterReducer,
  },
});
