import styles from './TimeoutPage.module.css';

function TimeoutPage() {
    function handleReload() {
        window.location.reload();
    }

    return (
        <div className={styles.content}>

            {/* <button onClick={handleReload}>go back</button> */}
            <a href="/" className={styles.link}>go back</a>
        </div>
    );
}

export default TimeoutPage;