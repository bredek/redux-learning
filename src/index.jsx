// imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

// consts
const API_KEY = 'AIzaSyCs-xGMalkiyWH86FwhaLzfaeQWBwZxrrA';

// App component
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };
    }

    componentWillMount() {
        YTSearch({ key: API_KEY, term: 'surfing' }, (videos) => {
            this.setState({ videos });
        })
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

// Render component
ReactDOM.render(<App />, document.querySelector('.container'));
