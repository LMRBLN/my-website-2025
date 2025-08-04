import styles from "./VideoPlayer.module.css";


function VideoPlayer({path}) {
  return (
    <video className={styles.player} width="100%" autoPlay muted loop controls>
      <source src={path} type="video/mp4" />
    </video>
  );
}

export default VideoPlayer;