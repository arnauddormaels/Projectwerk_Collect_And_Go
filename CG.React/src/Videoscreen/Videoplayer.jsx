import React, { useEffect, useRef } from 'react';
import styles from '../css/Videoplayer.module.css';

function VideoPlayer({ selectedRecipe }) { // Ontvang de geselecteerde video en andere gegevens als props
  const videoRef = useRef(null);

  useEffect(() => {
    const videoPlayer = videoRef.current;

    // Functie om vooruit en achteruit te springen
    function skip(value) {
      videoPlayer.currentTime += parseFloat(value);
      videoPlayer.play();
    }

    // Functie om het volume in te stellen
    function setVolume(value) {
      videoPlayer.volume = value;
    }

    // Automatisch afspelen met geluid wanneer de pagina is geladen
    const handleVideoCanPlay = () => {
      videoPlayer.play();
    };

    if (videoPlayer.readyState >= 3) {
      videoPlayer.play();
    } else {
      videoPlayer.addEventListener('canplay', handleVideoCanPlay);
    }

    return () => {
      videoPlayer.removeEventListener('canplay', handleVideoCanPlay);
    };
  }, [selectedRecipe]); // Luister naar veranderingen in de geselecteerde video

  useEffect(() => {
    // Wanneer de geselecteerde video verandert, update de videourl
    if (selectedRecipe && videoRef.current) {
      videoRef.current.src = selectedRecipe.videoUrl;
      videoRef.current.load(); // Laad de nieuwe video
    }
  }, [selectedRecipe]);

  return (
    <div className={styles.centeredContainer}>
      <div className={styles.videoContainer}>
        <div className={styles.video}>
          <video
            ref={videoRef}
            autoPlay
            controls
          ></video>
        </div>
        <div className={styles.content}>
          <div className={styles.productInfoContainer}>
            <div className={styles.productInfo}>
              <div className={styles.productButtons}>
                <button className={`${styles.actionButton} ${styles.productButton}`}>Product</button>
                <button className={`${styles.actionButton} ${styles.ingredientButton}`}>Ingrediënt</button>
              </div>
              <div className={styles.productDescription}>
                <img
                  src={selectedRecipe ? selectedRecipe.imgUrl : ''} // Gebruik de afbeelding van het geselecteerde gerecht, als het is geselecteerd
                  alt={selectedRecipe ? selectedRecipe.name : ''}
                />
                <h4>{selectedRecipe ? selectedRecipe.name : ''}</h4>
                <p>Korte beschrijving? Instructies?</p>
              </div>
              <div className={styles.actionButtons}>
                <button className={`${styles.actionButton} ${styles.addButton}`}>Mandje</button>
                <button className={`${styles.actionButton} ${styles.listButton}`}>Lijstje</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
