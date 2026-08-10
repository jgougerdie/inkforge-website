import { useEffect, useRef } from "react";

interface VideoTourModalProps {
  open: boolean;
  onClose: () => void;
}

export default function VideoTourModal({ open, onClose }: VideoTourModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const video = videoRef.current;
    video?.play().catch(() => {});
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      video?.pause();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Sharpline product tour video"
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-black shadow-card-hover"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>
        <video ref={videoRef} controls playsInline className="block w-full">
          <source src={`${import.meta.env.BASE_URL}sharpline-intro.webm`} type="video/webm" />
          <source src={`${import.meta.env.BASE_URL}sharpline-intro.mp4`} type="video/mp4" />
          Your browser doesn't support embedded video.
        </video>
      </div>
    </div>
  );
}
