import React, { useState, useEffect } from 'react';
import { fetchVideos } from '../services/api';

const VideoList = () => {
    const [videos, setVideos] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchVideos(1, search).then(setVideos);
    }, [search]);

    return (
        <div>
            <input type="text" placeholder="Search videos..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <div>
                {videos.map(video => (
                    <div key={video.video_id}>
                        <h3>{video.title}</h3>
                        <p>{video.description}</p>
                        <img src={video.thumbnail_url} alt={video.title} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoList;
// In the above code, we are defining a functional component  VideoList  that fetches videos from the backend server using the  fetchVideos  function.
//  We are using the  useState  hook to manage the state of the videos array and the search query. We are using the  useEffect  hook to fetch videos when the component mounts or when the search query changes.
//   We are rendering an input field for searching videos and a list of videos with their titles, descriptions, and thumbnail images. Each video item is rendered as a div element with the video title, description, and thumbnail image.
//    The key for each video item is set to the video_id to ensure uniqueness. The thumbnail image is displayed using an img element with the src attribute set to the video's thumbnail_url and the alt attribute set to the video's title.
//     The search input field is a controlled component that updates the search state when the user types in the input field. The videos array is mapped to a list of video elements using the map method, and each video item is rendered with its title, description, and thumbnail image.
