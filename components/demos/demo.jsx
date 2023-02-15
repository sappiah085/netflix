import TopLandingPage from '@/components/top_landing_page/top_landing_page';
import TvDemo from '@/components/tvDemo/tvDemo';
import tv from '../../public/static/tv.png';
import tv1 from '../../public/static/tv1.png';
import kids from '../../public/static/kids.png';
import Image from 'next/image';
import stranger from '../../public/static/stranger.jpg';
import boxshot from '../../public/static/boxshot.png';
import download from '../../public/static/download-icon.gif';
export default function Demos() {
  return (
    <>
      {' '}
      <TvDemo
        picture={tv}
        video={'/static/video-tv-0819.m4v'}
        header={'Enjoy on your TV'}
        sub={
          'Watch on smart TVs, Playstation, Xbox. Chromecast, Apple TV, Blu-ray players, and more.'
        }
      />
      <TvDemo
        direction={'flex-row-reverse'}
        header={'Download your shows to watch offline.'}
        borderB={8}
        sub={'Save your favorites easily and always have something to watch.'}
      >
        {' '}
        <span className="md:w-[90%] w-full md:h-full h-auto relative">
          <Image src={stranger} className="w-full h-full" alt="stranger" />
          <div className="h-[100px] flex items-center justify-between rounded-xl p-4 bg-black md:bottom-10 bottom-1 z-30 absolute left-1/2 -translate-x-1/2  w-full md:w-[60%] border-zinc-500 border-2">
            <Image src={boxshot} className="w-[50px] h-full" alt="stranger" />
            <div className="flex flex-col">
              <h4 className="text-white text-xl">Stranger Things</h4>
              <h5 className="text-blue-500">Downloading...</h5>
            </div>
            <div
              className="h-full w-[50px] md:w-[100px] bg-no-repeat bg-center"
              style={{ backgroundImage: `url(${download.src})` }}
            ></div>
          </div>
        </span>
      </TvDemo>
      <TvDemo
        picture={tv1}
        video={'/static/video-tv-08191.m4v'}
        header={'Watch everywhere'}
        className="w-[63%]  top-[10%] "
        sub={
          'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.'
        }
      />
      <TvDemo
        picture={kids}
        direction={'flex-row-reverse'}
        video={''}
        header={'Enjoy on your TV'}
        borderB={8}
        sub={
          'Watch on smart TVs, Playstation, Xbox. Chromecast, Apple TV, Blu-ray players, and more.'
        }
      />
    </>
  );
}
