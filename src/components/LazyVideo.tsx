'use client';

import { useEffect, useRef, useState } from 'react';

export default function LazyVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster?: string;
  className: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!('IntersectionObserver' in window)) {
      setHasEnteredViewport(true);
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasEnteredViewport(true);
        setIsVisible(true);
      } else {
        setIsVisible(false);
        video.pause();
      }
    });

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      src={hasEnteredViewport ? src : undefined}
      poster={poster}
      muted
      loop
      playsInline
      autoPlay={isVisible}
      preload="none"
    />
  );
}
