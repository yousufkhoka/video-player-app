import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos } from '../../features/relatedVideos/relatedVideosSlice';
import Loading from '../Ui/Loading';
import RelatedVideoItem from './RelatedVideoItem';

const RelatedVideos = ({tags,currentVideoId}) => {
    const {relatedVideos , isLoading , isError , error} = useSelector(state => state.relatedVideos)
      const dispatch = useDispatch()

      useEffect(() => {
        dispatch(fetchRelatedVideos({tags,id:currentVideoId}))
      },[dispatch, tags,currentVideoId])

      let content = null;

   if(isLoading) content = <Loading />
   if(isError) content = <div className="col-span-12">{error}</div>
   if(!isError && !isLoading && relatedVideos?.length>0) content = <div className="col-span-12">No video found!</div>
   if(!isLoading && !isError && relatedVideos?.length>0) content = relatedVideos.map(video =>  <RelatedVideoItem key={video.id} video={video}/>)
    return (
        <div
                    className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
                >
                  
                   {
                    content
                   }
                </div>
    );
};

export default RelatedVideos;