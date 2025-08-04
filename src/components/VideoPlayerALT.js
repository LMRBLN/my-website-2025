// import { useEffect, useRef } from 'react';
// import "cloudinary-video-player/cld-video-player.min.css";

// const style = { 
//     width: '30%'
// }

// const listOfVideos = ['crellemarkt', '', ''];

// function VideoPlayer({ id, publicId }) {
//   const videoRef = useRef();
//   const cloudinaryRef = useRef();
//   const playerRef = useRef();

//   useEffect(() => {
//     if (cloudinaryRef.current) return;

//     const script = document.createElement('script');
//     script.src = 'https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.js';
//     script.onload = () => {
//       cloudinaryRef.current = window.cloudinary;

//       playerRef.current = cloudinaryRef.current.videoPlayer(videoRef.current, {
//         cloud_name: 'lararockenstein',
//         secure: true
//       });

//       playerRef.current.source(publicId);
//       playerRef.current.on('loadeddata', () => {
//         playerRef.current.play(); // Play the video only when it is ready
//       });
//     };
//     document.body.appendChild(script);

//     // const link = document.createElement('link');
//     // link.rel = 'stylesheet';
//     // link.href = 'https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.css';
//     // document.head.appendChild(link);
//   }, [publicId]);

//   return (
//     <div style={style}>
//       <video
//         ref={videoRef}
//         id={id}
//         className="cld-video-player cld-fluid"
//         autoPlay
//         muted
//       />
//     </div>
//   );
// }

// export default VideoPlayer;