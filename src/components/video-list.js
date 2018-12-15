import React from 'react';
import VideoItem from './video-item';

const VideoList = (props) => {
    try {
        let returnedVideoItems = props.videos.map((video) => {
            return <VideoItem onVideoSelect={props.onVideoSelect} video={video} key={video.id.videoId} />
        });
        return <div className="ui list">{ returnedVideoItems }</div>
    }
    catch(error) {
        console.log(`Error ${error} thrown here!`);
    }
}

export default VideoList;
