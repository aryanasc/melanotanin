import React, { useEffect, useRef, useState } from 'react';

const VideoSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scale, setScale] = useState(0.85);
  const [radius, setRadius] = useState(20);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Progress: 0 when section top hits bottom of viewport, 1 when section top hits top
      const progress = Math.max(0, Math.min(1, 1 - rect.top / windowHeight));

      // Scale from 0.85 to 1
      setScale(0.85 + progress * 0.15);
      // Border radius from 20 to 0
      setRadius(Math.max(0, 20 - progress * 20));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pause when out of view
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-cream">
      <div
        className="mx-auto overflow-hidden"
        style={{
          maxWidth: '420px',
          transform: `scale(${scale})`,
          borderRadius: `${radius}px`,
          transition: 'border-radius 0.1s linear',
          willChange: 'transform, border-radius',
          boxShadow: '0 16px 60px rgba(0,0,0,0.1)',
        }}
      >
        <video
          ref={videoRef}
          controls
          playsInline
          preload="metadata"
          className="w-full h-auto block bg-black"
          style={{ aspectRatio: '9/16' }}
        >
          <source src="/aryan.mov" type="video/quicktime" />
          <source src="/aryan.mov" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default VideoSection;