import React, { useEffect, useRef, useState } from 'react';
import styles from '../css/Videoplayer.module.css';

function VideoPlayer({ selectedRecipe }) {
  const videoRef = useRef(null);
  const [videoProgress, setVideoProgress] = useState(0);
  const totalProducts = 5; // Adjust the total number of products as needed
  const [selectedDot, setSelectedDot] = useState(null);
  const [timings, setTimings] = useState([]);
  const [selectedTiming, setSelectedTiming] = useState(null);

  useEffect(() => {
    const videoPlayer = videoRef.current;

    function skip(value) {
      videoPlayer.currentTime += parseFloat(value);
      videoPlayer.play();
      return () => {
        setSelectedDot(null); // Reset selected dot when the video changes
      };
    }

    function setVolume(value) {
      videoPlayer.volume = value;
    }

    const handleVideoCanPlay = () => {
      videoPlayer.play();
    };

    if (videoPlayer.readyState >= 3) {
      videoPlayer.play();
    } else {
      videoPlayer.addEventListener('canplay', handleVideoCanPlay);
    }

    const handleVideoProgress = () => {
      const currentTime = videoPlayer.currentTime;

      // Find the timing that matches the current video time
      const matchingTiming = timings.find(timing => currentTime >= timing.startTime && currentTime <= timing.endTime);

      // Update the selected dot based on the matching timing
      if (matchingTiming) {
        const index = timings.indexOf(matchingTiming);
        setSelectedDot(index);
      }

      // Update the video progress
      const progress = (currentTime / videoPlayer.duration) * 100;
      setVideoProgress(progress);
    };

    videoPlayer.addEventListener('timeupdate', handleVideoProgress);

    return () => {
      videoPlayer.removeEventListener('canplay', handleVideoCanPlay);
      videoPlayer.removeEventListener('timeupdate', handleVideoProgress);
    };
  }, [selectedRecipe, timings]);

  useEffect(() => {
    const fetchTimings = async () => {
      try {
        const response = await fetch(`https://localhost:7226/api/Timing/(${selectedRecipe.recipeId})`);
        const data = await response.json();
        setTimings(data);
      } catch (error) {
        console.error('Error fetching timings:', error);
      }
    };

    if (selectedRecipe) {
      fetchTimings();
    }
  }, [selectedRecipe]);

  useEffect(() => {
    if (selectedRecipe && videoRef.current) {
      videoRef.current.src = selectedRecipe.videoUrl;
      videoRef.current.load();
    }
  }, [selectedRecipe]);

  const handleDotClick = (index) => {
    setSelectedDot(index);

    // Jump to the start time of the selected timing
    const selectedTiming = timings[index];
    setSelectedTiming(selectedTiming);
    
  };

  return (
    <div className={styles.centeredContainer}>
      <div className={styles.videoContainer}>
        <div className={styles.video}>
          <video ref={videoRef} autoPlay controls></video>
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
              src={selectedTiming ? selectedTiming.product.imgUrl : selectedRecipe ? selectedRecipe.imgUrl : ''}
    alt={selectedTiming ? selectedTiming.product.name : selectedRecipe ? selectedRecipe.name : ''}
    style={{
      borderRadius: '10px', // Adjust the border-radius as needed
      border: '2px solid #000', // Add a black border with 2px width, adjust as needed
    }}
  />
                <h4>{selectedTiming ? selectedTiming.product.name : selectedRecipe ? selectedRecipe.name : ''}</h4>
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

      {/* Progress Bar with Dots */}
<div className={styles.progressBarContainer}>
  <div className={styles.progressBar}>
    <div className={styles.progress} style={{ width: `${videoProgress}%` }}></div>
    <div className={styles.dotContainer}>
      {timings.map((timing, index) => (
        <button
          key={index}
          className={`${styles.dot} ${index === selectedDot ? styles.selectedDot : ''}`}
          style={{ left: `${(timing.startTime / videoRef.current.duration) * 100}%` }}
          onClick={() => handleDotClick(index)}
        >
          {/* Tooltip content */}
          <span className={styles.tooltip}>
            <img
              src={timing.product.imgUrl}
              alt={timing.product.name}
              style={{ width: '100px', height: '100px' }}
            />
            <p>{timing.product.name}</p>
          </span>
        </button>
      ))}
    </div>
  </div>
</div>
{/* End of Progress Bar with Dots */}
    </div>
  );
}

export default VideoPlayer;