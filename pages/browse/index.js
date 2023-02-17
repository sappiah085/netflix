import NavForMobile from '@/components/navForMobile/navForMobile';
import Category from '@/components/category/category';
import { links } from '@/components/navForMobile/navlinks';
import NavForLarge from '@/components/navforLarge/navforLarge';
import VideoPlayer from '@/components/videoPlayer/videoplayer';
export default function Browse() {
  return (
    <div className="w-full md:z-50  overflow-hidden md:min-h-screen  md:overflow-y-scroll h-screen bg-black ">
      <NavForMobile />
      <NavForLarge />
      <VideoPlayer />
      <div className="w-full pb-8 md:-mt-[210px] md:z-50 relative flex flex-col  overflow-y-scroll md:overflow-y-visible gap-10 md:gap-5 h-screen pt-20 md:pt-0 md:pl-14 pl-5">
        {links.map(({ label }) => (
          <Category key={label} label={label} />
        ))}
      </div>
    </div>
  );
}
