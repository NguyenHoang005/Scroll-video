"use client";

import { Video } from "@/types/video";
import { useEffect, useRef, useState } from "react";
import {
  FaHeart,
  FaCommentDots,
  FaShare,
  FaPlay,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";


interface Props {
  video: Video;
}

export default function VideoCard({ video }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [playing, setPlaying] = useState(true);

  const [muted, setMuted] = useState(true);

  const [liked, setLiked] = useState(false);

    const [likes, setLikes] = useState(
    video.likesCount
    );

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!videoRef.current) return;

      if (entry.isIntersecting) {
        videoRef.current.play();
        setPlaying(true);
      } else {
        videoRef.current.pause();
        setPlaying(false);
      }
    },
    {
      threshold: 0.7,
    }
  );

  if (videoRef.current) {
    observer.observe(videoRef.current);
  }

  return () => observer.disconnect();
}, []);

  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };
const handleLike = () => {
  if (liked) {
    setLikes((prev) => prev - 1);
  } else {
    setLikes((prev) => prev + 1);
  }

  setLiked(!liked);
};

  const toggleMute = () => {
    if (!videoRef.current) return;

    const next = !muted;
    videoRef.current.muted = next;
    setMuted(next);
  };
  return (
    <div
      className="
        relative
        h-screen
        snap-start
        flex
        justify-center
        items-center
        bg-black
      "
    >
      <div
        className="
          relative
          h-full
          w-full
          md:w-[420px]
        "
      >
        <video
          ref={videoRef}
          autoPlay
          src={video.videoUrl}
          className="
            h-full
            w-full
            object-cover
            cursor-pointer
          "
          loop
          muted={muted}
          playsInline
          onClick={togglePlayPause}
        />

        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute" : "Mute"}
          className="
            absolute
            top-4
            right-4
            z-10
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-black/40
            text-white
          "
        >
          {muted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
            <div
            className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/80
                via-transparent
                to-transparent
                pointer-events-none
            "
            />
        {!playing && (
          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              text-white
              text-6xl
              pointer-events-none
            "
          >
            <FaPlay />
          </div>
        )}

                <div
        className="
            absolute
            left-4
            bottom-24
            text-white
            max-w-[70%]
        "
        >
          <h3 className="font-bold">
            @{video.authorName}
          </h3>

          <p>{video.description}</p>
        </div>
                    <div
            className="
                absolute
                right-4
                bottom-24
                flex
                flex-col
                items-center
                gap-6
                text-white
            "
            >
          <button
            onClick={handleLike}
            aria-label="Like"
            className="flex flex-col items-center gap-1"
          >
            <FaHeart
              className={`text-3xl transition-colors ${
                liked ? "text-red-500" : "text-white"
              }`}
            />
            <span className="text-sm">{likes}</span>
          </button>

          <button
            aria-label="Comment"
            className="flex flex-col items-center gap-1"
          >
            <FaCommentDots className="text-3xl" />
          </button>

          <button
            aria-label="Share"
            className="flex flex-col items-center gap-1"
          >
            <FaShare className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
}