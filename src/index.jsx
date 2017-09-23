// imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// consts
const API_KEY = 'AIzaSyCs-xGMalkiyWH86FwhaLzfaeQWBwZxrrA';

// App component
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
    }

    componentWillMount() {
        YTSearch({ key: API_KEY, term: 'React tutorials' }, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        })
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail 
                    video={this.state.selectedVideo} />
                <VideoList 
                    videos={this.state.videos} 
                    onVideoSelect={(selectedVideo) => {this.setState({selectedVideo})}}/>
            </div>
        )
    }
}

// Render component
ReactDOM.render(<App />, document.querySelector('.container'));
