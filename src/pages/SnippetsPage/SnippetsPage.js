
import { useEffect, useRef } from 'react';
import styles from "./SnippetsPage.module.css"


function SnippetsPage() {


    return (
      <div className={styles.content}>
        <video 
          width="100%" 
          controls 
          autoplay 
          muted 
          loop 
          playsinline
          onMouseEnter={(e) => e.target.muted = false}
          onMouseLeave={(e) => e.target.muted = true}
          ref={(video) => {
            if (video) {
              video.play().catch(e => {
                console.log('Autoplay blocked:', e);
              });
            }
          }}
          >
          <source src="/videos/OnboardingLoop.mp4" type="video/mp4" />
        </video>
      </div>
    )

}

export default SnippetsPage;