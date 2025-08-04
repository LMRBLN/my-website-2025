
import { useEffect, useRef } from 'react';
// import VideoPlayer from '../components/VideoPlayer/VideoPlayer';

// const style = {
//     gridColumn: '2 / 11',
//     minHeight: '100vh',
//     boxSizing: 'border-box',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//     justifyContent: "center", // Horizontal zentrieren
//     gap: 12,
// };


        // <div style={style}>
        //     <p> Ich bin die Snippets page</p>
        //     <VideoPlayer src="/videos/demo.mp4" id={'crellemarkt'} publicId={'crellemarkt'}/>
        // </div>

        //         <div style={style}>
        //     <p> Ich bin die Snippets page</p>
        //     <VideoPlayer src="/videos/demo.mp4" type="video/mp4"/>
        // </div>

function SnippetsPage() {


    return (

    <video width="100%" controls>
      <source src="/videos/OnboardingLoop.mp4" type="video/mp4" />
    </video>
    )

}

export default SnippetsPage;