import React from 'react';

import './static/video-detail.css'

const VideoDetail = ({ video }) => {
    if(!video) {
        return <div>Please select a video from below videos</div>;
    }
    const src = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className="ui embed">
                <iframe 
                    src={src} 
                    frameBorder="0" 
                    title=" youtube video"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                />
            </div>
            <div className="ui segment">
                <h4 className="header">{ video.snippet.title }</h4>
                <p>{ video.snippet.description }</p>
            </div>
        </div>
    );
}

export default VideoDetail;