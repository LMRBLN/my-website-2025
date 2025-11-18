import styles from './TimeoutPage.module.css';

function TimeoutPage() {

    return (
        <div className={styles.content}>
            <video
                className={styles.backgroundVideo}
                autoPlay
                loop
                muted
                playsInline
                >
            <source src="/videos/gradients.mov" type="video/mp4" />
            </video>

            <a href="/" className={styles.link}>go back</a> 
        </div>
    );
}

export default TimeoutPage;