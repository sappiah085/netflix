import { TfiWorld } from 'react-icons/tfi';
import { IoMdArrowDropdown } from 'react-icons/io';
export default function Footer({ border }) {
  return (
    <div
      className={`border-t-${border} bg-black px-10 md:px-[200px] py-14 border-zinc-600 w-full flex flex-col`}
    >
      <span className="text-zinc-400 text-lg ">
        Questions? Call{' '}
        <a className="underline " href="telephone:+36208090899">
          36208090899
        </a>
      </span>
      <div className="grid gap-5 grid-cols-3 mt-10">
        {[
          'FAQ',
          'Account',
          'Jobs',
          'Ways to Watch',
          'Cookie Preferences',
          'Speed Test',
          'Only on Netflix',
          'Gift Card Terms',
          'Media Center',
          'Redeem Gift Cards',
          'Terms of Use',
          'Corperate Information',
          'Legal Guarantee',
          'Help Center',
          'Investor Relations',
          'Buy Gift Cards',
          'Privacy',
          'Contact Us',
          'Legal Notices',
        ].map((el) => (
          <a
            className="underline text-zinc-400 text-md "
            key={el}
            href="telephone:+36208090899"
          >
            {el}
          </a>
        ))}
      </div>
      <button className="py-2 mt-8 w-[140px] md:py-1 px-5 flex items-center gap-2 rounded-md text-white border-white border">
        <TfiWorld /> <span className=" md:inline"> English</span>{' '}
        <IoMdArrowDropdown />
      </button>
      <a className=" mt-2 text-zinc-400 text-md " href="telephone:+36208090899">
        Netflix Hungary
      </a>
    </div>
  );
}
