import React from 'react';

import './static/video-item.css';

const VideoItem = ({ video, onVideoSelect }) => {
    const href = `#/${video.id.videoId}`;
    return (
        <div className="video-item item">
            <a onClick={(e) => onVideoSelect(video, e)} href={ href }>
                <img 
                    className="ui image" 
                    src={ video.snippet.thumbnails.medium.url } 
                    alt={ video.snippet.title }
                    title={ video.snippet.title } 
                />
                <div className="content">
                    <div className="header">{ video.snippet.title }</div>
                    <div className="description"><p>{ video.snippet.description }</p></div>
                </div>
            </a>
        </div>
    );
}

export default VideoItem;