import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/static/netflix.svg';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsBell } from 'react-icons/bs';
import { MdArrowDropDown } from 'react-icons/md';
export default function NavForLarge() {
  return (
    <div
      className="w-full fixed top-0 z-[200] bg-black/60 hidden md:block text-zinc-300"
      role="navigation"
    >
      <nav className="flex items-center px-10 py-5 justify-between">
        <span className="flex items-center gap-6">
          <Image src={logo} alt="logo" />
          <ul className="flex items-center gap-2">
            <li>
              <Link className="hover:text-white" href={'/'}>
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href={'/'}>
                TV Shows
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href={'/'}>
                Movies
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href={'/'}>
                New & Popular
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href={'/'}>
                My List
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href={'/'}>
                Browse Languages
              </Link>
            </li>
          </ul>
        </span>
        <span className="flex items-center gap-3">
          <label className="flex items-center gap-2" htmlFor="search">
            <span className="-mr-10 text-xl text-white z-10">
              <AiOutlineSearch />
            </span>
            <input
              placeholder="Titles, people, genres"
              className="focus-within:bg-black w-0 transition-all border-transparent border-2 focus-within:w-full focus-within:border-white bg-transparent text-white outline-none pl-10 py-1 "
              type="text"
              id="search"
            />
          </label>
          <Link className="hover:text-white" href={'/'}>
            Kids
          </Link>
          <span className=" text-xl text-white">
            <BsBell />
          </span>
          <span className="flex gap-1 items-center">
            <Image className="w-[60px]" src={logo} alt="user" />
            <span className="text-xl text-white">
              {' '}
              <MdArrowDropDown />
            </span>
          </span>
        </span>
      </nav>
    </div>
  );
}
