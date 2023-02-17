import { FaBars } from 'react-icons/fa';
import netflix from '../../public/static/netflix.svg';
import Link from 'next/link';
import Image from 'next/image';
import { links } from './navlinks';
import { useRouter } from 'next/router';
import { useState } from 'react';
export default function NavForMobile() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <div role="navigation" className="md:hidden">
      <nav
        className={`${
          !open ? ' bg-black/70 ' : 'bg-black '
        } fixed top-0 w-full flex z-50 items-center justify-between p-4`}
      >
        <span className="text-white text-2xl flex items-center gap-2">
          <button
            onClick={() => setOpen((pre) => !pre)}
            aria-roledescription="toggle"
          >
            <FaBars />
          </button>
          <Image className='w-[50%]' src={netflix} alt="Logo" />
        </span>
        <input
          className="border-zinc-400 w-[60%] text-white border-2 p-2 py-1 bg-zinc-400/20"
          type="text"
          placeholder="Search"
          aria-label="search box"
        />
      </nav>
      <div
        role="menu"
        className={`${
          !open ? 'scale-x-0 ' : 'scale-x-1'
        } bg-black/40 w-full z-20 origin-left transition-all delay-75  overflow-scroll text-zinc-400 absolute h-screen`}
      >
        <div
          className={`${
            !open ? ' translate-x-[-120%] ' : 'translate-x-0 '
          }  bg-black pt-16 transition-all flex flex-col gap-2 w-2/3 `}
        >
          <span className="border-b-2 border-zinc-500 pb-4 flex flex-col gap-3">
            <span className="flex  gap-2 ">
              <Image className="w-14" src={netflix} alt="user" />
              <Link
                className="flex-col  hover:text-white flex font-bold text-xl"
                href={'/'}
              >
                Daniel
                <span className="font-medium text-sm -mt-2">
                  switch profiles
                </span>
              </Link>
            </span>
            <ul className=" flex flex-col gap-1 font-bold">
              <li className=" hover:text-white">
                <Link href={'/'}>Account</Link>
              </li>
              <li className=" hover:text-white">
                <Link href={'/'}>Help Center</Link>
              </li>
              <li className=" hover:text-white">
                <Link href={'/'}>Sign Out Of Netflix</Link>
              </li>
            </ul>
          </span>
          <ul className="flex flex-col py-2">
            {links.map(({ link, label }) => (
              <li
                key={label}
                className={`${
                  router.pathname === link
                    ? 'border-l-4 border-red-500 text-white '
                    : ''
                }hover:text-white   pl-2 py-2 font-bold`}
              >
                <Link href={link}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
