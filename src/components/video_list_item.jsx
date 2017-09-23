import React, { Component } from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    console.log(onVideoSelect);
    return (
      <li className="list-group-item" onClick={()=>{onVideoSelect(video)}}>
          <div className="video-list media">
            <div className="media-left">
                <img src={video.snippet.thumbnails.default.url} alt="" className="media-object"/>
            </div>
            <div className="media-body">
                <div className="media-heading">
                    {video.snippet.thumbnails.default.url}
                </div>
            </div>
          </div>
      </li>
    )
}

export default VideoListItem;