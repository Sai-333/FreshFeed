import React from 'react';
import VideoList from './components/VideoList';

function App() {
    return (
        <div>
            <h1>FreshFeed - Latest Videos</h1>
            <VideoList />
        </div>
    );
}

export default App;
// In the above code, we are defining the main App component that renders the title of the application and the VideoList component. The VideoList component is responsible for fetching and displaying the latest videos from the backend server. The App component renders the title "FreshFeed - Latest Videos" and the VideoList component inside a div element. The VideoList component will display the list of videos fetched from the backend server.
// The App component is the root component of our React application and is responsible for rendering the main content of the application. It includes the VideoList component, which fetches and displays the latest videos from the backend server. The VideoList component is a functional component that uses hooks to manage state and side effects. It fetches videos from the backend server using the fetchVideos function and displays them in a list format. The App component renders the title of the application and the VideoList component inside a div element. The VideoList component displays the list of videos fetched from the backend server. The App component is exported as the default export from the App.js file, making it the entry point of our React application.