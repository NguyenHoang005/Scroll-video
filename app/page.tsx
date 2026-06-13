import VideoCard from "@/components/VideoCard";
import { videos } from "@/data/videos";

export default function Home() {
  return (
    <main
      className="
        h-screen
        overflow-y-scroll
        snap-y
        snap-mandatory
        bg-black
      "
    >
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
        />
      ))}
    </main>
  );
}