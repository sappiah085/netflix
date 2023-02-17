export default function VideoPlayer() {
  return (
    <div className="hidden  relative h-full w-full md:flex">
      <video
        className="w-full drop-shadow-md left-0 top-0 absolute object-cover h-full fade-video"
        autoPlay
        playsInline
        src="/static/video.mp4"
      ></video>
    </div>
  );
}
