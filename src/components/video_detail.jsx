import React, { Component } from 'react';

const VideoDetail = ({video}) => {
    const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div className="video-detail col-md-8">
          <div className="embed-responsive embed-responsive-16by9">
              <iframe src={videoUrl} frameborder="0" className="embed-responsive-item"></iframe>
          </div>
          <div className="details">
              <div>{video.snippet.title}</div>
              <div>{video.snippet.description}</div>
          </div>
      </div>
    )
}

export default VideoDetail;