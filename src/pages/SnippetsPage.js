
import { useEffect, useRef } from 'react';
import VideoPlayer from '../components/VideoPlayer';

const style = {
    gridColumn: '2 / 11',
    minHeight: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: "center", // Horizontal zentrieren
    gap: 12,
};


function SnippetsPage() {


    return (
        <div style={style}>
            <p> Ich bin die Snippets page</p>
            <VideoPlayer id={'crellemarkt'} publicId={'crellemarkt'}/>
        </div>
    )

}

export default SnippetsPage;