import React from 'react';
import VideoItem from './VideoItem';

// @ts-ignore
const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video: any) => {
        return <VideoItem
            key={video.id.videoId}
            onVideoSelect={onVideoSelect}
            video={video}/>
    });
    return <div className="ui relaxed divided list"> {renderedList} </div>
};

export default VideoList;