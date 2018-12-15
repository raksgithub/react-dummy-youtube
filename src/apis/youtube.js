import Axios from 'axios';
const API_KEY = "AIzaSyAW_SILud8W-arQ-ydCFzIknbVmUuaszgU";

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: API_KEY
    }
});