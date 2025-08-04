import styles from './TimeoutPage.module.css';

function TimeoutPage() {
    function handleReload() {
        window.location.reload();
    }

    return (
        <div className={styles.content}>
            {/* <h1>Timeout</h1> */}
            {/* <button onClick={handleReload}>go back</button> */}
            <a href="/" className={styles.link}>go back</a>
        </div>
    );
}

export default TimeoutPage;