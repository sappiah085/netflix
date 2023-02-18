import Link from 'next/link';
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { RxSpeakerOff, RxSpeakerLoud } from 'react-icons/rx';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { MdReplay } from 'react-icons/md';
import pic from '../../public/static/pic.png';
export default function VideoPlayer() {
  const [mute, setMute] = useState(false);
  const [ended, setEnded] = useState(false);
  const video = useRef(null);
  function play(e) {
    setEnded(true);
  }
  return (
    <div className="hidden  after:bg-black/25 gap-6 after:absolute after:top-0 after:left-0 after:w-full after:h-full relative h-[90vh] w-full md:flex flex-col justify-center">
      <video
        className="w-full drop-shadow-md left-0 top-0 absolute object-cover h-full fade-video"
        // autoPlay
        ref={video}
        onEnded={play}
        muted={mute}
        playsInline
        src="/static/video.mp4"
      ></video>
      <div className="text-white  flex-col flex items-start z-20 px-24 w-3/6">
        <Image
          src={pic}
          className={`${
            !ended
              ? 'scale-70 translate-x-[-3%]'
              : 'scale-100 translate-x-[0%] '
          } transition-all h-2/3`}
          alt="movie-image"
        />
        {ended && (
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor quis
            ad quod at, nam illo reiciendis velit id aliquid laborum architecto,
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Blanditiis, iusto nisi!
          </p>
        )}
      </div>
      <div className="z-10 flex justify-between w-full px-24 pr-0 text-white">
        <div className="flex items-center gap-7">
          <Link
            className="flex items-center gap-2 font-bold bg-white text-black hover:bg-white/50 p-2 px-5 rounded-md"
            href={'/'}
          >
            <FaPlay />
            Play
          </Link>
          <Link
            className="flex items-center gap-2 font-bold bg-zinc-50/30 text-white hover:bg-zinc-50/10 p-2 px-5 rounded-md"
            href={'/'}
          >
            <AiOutlineInfoCircle />
            More Info
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {!ended && (
            <button
              onClick={() => setMute((pre) => !pre)}
              className="h-[40px] w-[40px] border-2 text-xl flex justify-center items-center rounded-[50%]"
            >
              {mute && <RxSpeakerLoud />}
              {!mute && <RxSpeakerOff />}
            </button>
          )}
          {ended && (
            <button
              onClick={() => {
                setEnded(false);
                video.current.play();
              }}
              className="h-[40px] w-[40px] border-2 text-xl flex justify-center items-center rounded-[50%]"
            >
              <MdReplay />
            </button>
          )}
          <span className="h-full w-[100px] bg-white/10 text-xl  items-center flex justify-center border-l-2 border-white">
            12+
          </span>
        </div>
      </div>
    </div>
  );
}
