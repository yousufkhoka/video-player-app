import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import VideoDescription from '../components/Discription/VideoDescription';
import RelatedVideos from '../components/List/RelatedVideos';
import Loading from '../components/Ui/Loading';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import { fetchVideo } from '../features/video/videoSlice';

const Video = () => {
    const {video , isLoading ,isError ,error} = useSelector(state => state.video)
    const dispatch = useDispatch()
    const {videoId} = useParams()
    const {link ,title , id , tags} = video || {}

    useEffect(() => {
      dispatch(fetchVideo(videoId))
    },[videoId,dispatch])

    let content = null;

    if(isLoading) content = <Loading/>

    if(isError) content = <div className="col-span-12">{error}</div> 

    if(!isLoading && !isError && !video.id) content = <p>No video found!</p>

    if(!isLoading && !isError && video.id) content = <div className="grid grid-cols-3 gap-2 lg:gap-8">
    <div className="col-span-full w-full space-y-8 lg:col-span-2">
         <VideoPlayer link={link}  title={title} />
        <VideoDescription video={video}/>
    </div>
     <RelatedVideos tags={tags} currentVideoId={id} />
   </div>


    return (
        <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
            {content}
        </div>
    </section>
   
    );
};

export default Video;