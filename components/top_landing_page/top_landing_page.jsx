import Image from 'next/image';
import bg from '../../public/static/back.jpg';
import logo from '../../public/static/netflix.svg';
import { TfiWorld } from 'react-icons/tfi';
import { IoMdArrowDropdown } from 'react-icons/io';
import Sub from '../sub/sub';
export default function TopLandingPage() {
  return (
    <div className="w-full flex flex-col pb-32 md:pb-0 items-start justify-start relative md:min-h-screen ">
      <header className="box-border w-full py-5 px-4 md:px-36">
        <nav className="h-full w-full justify-between  flex items-center">
          <Image alt="logo" className="h-5 md:h-12 w-auto" src={logo} />
          <div className="flex items-center gap-3 ">
            <button className="py-2 md:py-1 px-5 flex items-center gap-2 rounded-md text-white border-white border">
              <TfiWorld /> <span className="hidden md:inline"> English</span>{' '}
              <IoMdArrowDropdown />
            </button>
            <button className="py-1 px-5 hover:bg-[#ff0000c3] rounded-md bg-red-600 text-white border-red-600 border">
              Sign In
            </button>
          </div>
        </nav>
      </header>
      <div className="w-full px-2 md:px-5 md:mt-auto mt-10 m-auto gap-6 flex flex-col items-center">
        <h1 className="md:text-7xl text-3xl md:w-5/6 w-full h-min text-center px-2 font-bold text-white">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="md:text-4xl text-xl brightness-110 text-white">
          Watch anywhere. Cancel anytime.
        </h2>
        <Sub />
      </div>

      <span className="w-full h-full -z-30 absolute after:content-[''] after:absolute  after:h-full after:w-full after:top-0 after:left-0 after:bg-gradient-to-b from-[#000000f5] via-[#00000075] to-[#000000e5]">
        <Image
          className="w-full object-cover h-full -z-91 relative top-0 left-0 "
          alt="back-ground"
          src={bg}
        />
      </span>
    </div>
  );
}
