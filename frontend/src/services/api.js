import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchVideos = async (page = 1, search = '') => {
    try {
        const response = await axios.get(`${API_URL}/videos`, { params: { page, search } });
        return response.data;
    } catch (error) {
        console.error('Error fetching videos:', error);
        return [];
    }
};
// In the above code, we are defining a function  fetchVideos  that makes an HTTP GET request to the  /api/videos  endpoint of our backend server.
//  We are passing the  page  and  search  parameters as query parameters in the request. If the request is successful, 
// we return the response data (an array of videos).
//   If there is an error during the request, we log the error to the console and return an empty array.