import styles from './TimeoutPage.module.css';

function TimeoutPage() {

    return (
        <div className={styles.content}>
            <div className={styles.videoWrapper}>
                <video
                    className={styles.backgroundVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    >
                <source src="/videos/gradients.mov" type="video/mp4" />
                </video>
            </div>
            <a href="/" className={styles.goBackLink}>go back</a> 
        </div>
    );
}

export default TimeoutPage;