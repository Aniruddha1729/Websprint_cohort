import { useEffect, useRef } from "react";
// import { useTheme } from "../providers/ThemeProvider"; // TODO: Implement useTheme

const darkLoader = "https://res.cloudinary.com/dgd5sfnrq/video/upload/v1771391874/coh-loader-dark_nhdslp.mp4";
const lightLoader = "https://res.cloudinary.com/dgd5sfnrq/video/upload/v1771391872/coh-loader-light_pmzlpg.mp4";

export default function Loader({ onLoadingComplete }) {
  // const { theme } = useTheme();
  const theme = "dark";
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playbackSpeed = 4;
    
    const handleLoadedMetadata = () => {
      if (video.duration) {
        video.playbackRate = video.duration / playbackSpeed;
      }
    };
    
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    
    const fallbackTimeout = setTimeout(() => {
      onLoadingComplete();
    }, (playbackSpeed + 0.5) * 1000);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      clearTimeout(fallbackTimeout);
    };
  }, [onLoadingComplete]);

  const handleVideoEnd = () => {
    onLoadingComplete();
  };

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center ${theme === "dark" ? "bg-[#000000]" : "bg-[#ffffff]"}`}>
      <div className="w-full max-w-md aspect-square flex items-center justify-center">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="w-full h-full object-contain"
          aria-hidden="true"
        >
          <source src={theme === "dark" ? darkLoader : lightLoader} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
