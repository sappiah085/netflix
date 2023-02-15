import Image from 'next/image';

export default function TvDemo({
  children,
  video,
  picture,
  header,
  sub,
  direction,
  borderB = 2,
  className = 'w-[73%]  h-auto top-[20%] -translate-x-[50%] left-[50%]  ',
}) {
  return (
    <div
      className={
        `border-t-8 border-b-${borderB}  px-4 md:px-36 flex-wrap md:flex-nowrap justify-center py-11 flex items-center border-zinc-500 bg-black md:bg-gradient-to-r from-[#000000de]  via-black to-black` +
        ' ' +
        direction
      }
    >
      <div className="min-w-[290px] md:text-left text-center flex flex-col gap-7 md:w-1/2">
        <h1 className="text-white text-2xl md:text-7xl font-bold">{header}</h1>
        <p className="text-white text-md md:text-2xl">{sub}</p>
      </div>
      <div className="min-w-[290px] overflow-hidden bg-no-repeat bg-center z-10  w-full md:w-2/3  relative flex justify-center items-center">
        {children}
        {picture && (
          <Image src={picture} className="w-full h-full z-10" alt="tv" />
        )}
        <span className={className + ' ' + 'absolute -z-10 empty:hidden'}>
          {video && (
            <video
              loop
              playsInline
              muted
              className=" object-contain overflow-clip w-full absolute top-0 left-0 "
              autoPlay
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </span>
      </div>
    </div>
  );
}
