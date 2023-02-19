import NavForMobile from '@/components/navForMobile/navForMobile';
import Category from '@/components/category/category';
import { links } from '@/components/navForMobile/navlinks';
import NavForLarge from '@/components/navforLarge/navforLarge';
import VideoPlayer from '@/components/videoPlayer/videoplayer';
import { useEffect, useRef, useState } from 'react';
import Footer from '@/components/footer/footer';
export default function Browse() {
  const container = useRef(null);
  const [navBack, setNavBack] = useState(false);
  useEffect(() => {
    const containerCurrent = container.current;
    function scroll(e) {
      if (e.target.scrollTop > 58) {
        setNavBack(true);
      } else {
        setNavBack(false);
      }
    }
    containerCurrent.addEventListener('scroll', scroll);
    return () => {
      containerCurrent.removeEventListener('scroll', scroll);
    };
  }, []);
  return (
    <div
      ref={container}
      className="w-full md:z-50  overflow-hidden md:min-h-screen  md:overflow-y-scroll h-screen bg-black "
    >
      <NavForMobile />
      <NavForLarge navBack={navBack} />
      <VideoPlayer />
      <div className="w-full pb-8 md:-mt-[100px] md:z-50 relative flex flex-col  overflow-y-scroll md:overflow-y-visible gap-10 md:gap-5 h-screen pt-20 md:pt-0 ">
        <Category label={'Popular on Netflix'} />
        {links.slice(1, 4).map(({ label }, id) => (
          <Category key={label} label={label} />
        ))}
        <Footer />
      </div>
    </div>
  );
}
