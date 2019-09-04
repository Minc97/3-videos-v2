import axios from 'axios'

const KEY = 'AIzaSyAQ0Q9aIKkflYd63p2mWATpZ-R8bOWRL48';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});