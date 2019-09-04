import * as React from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component<any, any> {
    state = {
        videos: [],
        selectedVideo: null
    };
    componentDidMount(): void {
        this.onTermSubmit('music')
    }

    onTermSubmit = async (term: any) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    };
    onVideoSelect = (video: any) => {
        this.setState({ selectedVideo: video });
        console.log(video)
    };
    render(): any {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;