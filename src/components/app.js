import React from 'react';


// Components imports 
import youtube from '../apis/youtube';
import SearchBar from './search-bar';
import VideoList from './video-list';
import VideoDetail from './video-detail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };
    componentDidMount() {
        this.onTermSubmit('The Kapil Sharma show');
    }
    onTermSubmit = (term) => {
        //console.log(term);
        if(term !== "") {
            youtube.get('/search', {
                params: {
                    q: term
                }
            }).then((response) => {
                //console.log(response);
                this.setState({
                    videos: response.data.items,
                    selectedVideo: response.data.items[2]
                });
                // console.log(this.state.videos);
            });
        } else {
            console.log(`Term is empty`);
        }
    }

    onVideoSelect = (video, event) => {
        event.preventDefault();
        // console.log('Selected video ', video);
        this.setState({
            selectedVideo: video
        });
    }

    render() {
        return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="ten wide column">
                        <VideoDetail video={ this.state.selectedVideo } />
                    </div>
                    <div className="six wide column">
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default App;