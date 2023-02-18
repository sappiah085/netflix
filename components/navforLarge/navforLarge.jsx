import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/static/netflix.svg';
import { AiOutlineSearch, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsBell } from 'react-icons/bs';
import { MdArrowDropDown } from 'react-icons/md';
import { HiOutlinePencil } from 'react-icons/hi';
import { RxPerson } from 'react-icons/rx';
import { BiTransfer } from 'react-icons/bi';
export default function NavForLarge({ navBack }) {
  return (
    <div
      className={`w-full fixed top-0 z-[200] ${
        !navBack ? 'bg-gradient-to-b from-black/75 to-black/10' : 'bg-black'
      } hidden md:block text-zinc-300 transition-all`}
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
          <span className="flex group gap-1 relative cursor-pointer items-center">
            <Image className="w-[60px]" src={logo} alt="user" />
            <span className="text-2xl transition-all group-hover:rotate-180  text-white">
              {' '}
              <MdArrowDropDown />
            </span>
            <div className="bg-black after:w-4 hidden after:-top-4 after:right-6 after:absolute  after:border-8 after:border-t-transparent after:border-l-transparent after:border-r-transparent flex-col gap-2 p-2 px-2 group-hover:flex w-[200px] right-0 top-[110%] absolute">
              <ul className="flex flex-col pb-5 w-full border-zinc-600 border-b-2 gap-2">
                <li>
                  <Link
                    className="flex hover:underline items-center gap-4"
                    href={'/'}
                  >
                    <Image
                      className="w-[30px] h-[30px] "
                      src={logo}
                      alt="user"
                    />
                    Daniel
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex hover:underline items-center gap-4"
                    href={'/'}
                  >
                    <Image
                      className="w-[30px] h-[30px] "
                      src={logo}
                      alt="user"
                    />
                    Samuel
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex hover:underline items-center gap-4"
                    href={'/'}
                  >
                    <Image
                      className="w-[30px] h-[30px] "
                      src={logo}
                      alt="user"
                    />
                    Guest
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex hover:underline items-center gap-4"
                    href={'/'}
                  >
                    <Image
                      className="w-[30px] h-[30px] "
                      src={logo}
                      alt="user"
                    />
                    Kids
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex  hover:underline items-center gap-4"
                    href={'/manageProfiles'}
                  >
                    <span className="text-2xl text-zinc-500">
                      <HiOutlinePencil />
                    </span>
                    Manage Profiles
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex  hover:underline items-center gap-4"
                    href={'/manageProfiles'}
                  >
                    <span className="text-2xl text-zinc-500">
                      <BiTransfer />
                    </span>
                    Transfer Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex  hover:underline items-center gap-4"
                    href={'/manageProfiles'}
                  >
                    <span className="text-2xl text-zinc-500">
                      <RxPerson />
                    </span>
                    Account
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex  hover:underline items-center gap-4"
                    href={'/manageProfiles'}
                  >
                    <span className="text-2xl text-zinc-500">
                      <AiOutlineQuestionCircle />
                    </span>
                    Help
                  </Link>
                </li>
              </ul>
              <Link
                className="flex  py-1 w-full justify-center hover:underline items-center gap-4"
                href={'/'}
              >
                Sign out of Netflix
              </Link>
            </div>
          </span>
        </span>
      </nav>
    </div>
  );
}
