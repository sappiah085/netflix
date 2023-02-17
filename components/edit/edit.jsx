import Image from 'next/image';
import stranger from '../../public/static/stranger.jpg';
import { AiFillCaretDown, AiOutlineWarning } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BiCheck } from 'react-icons/bi';
export default function Edit({ handleClick, edit }) {
  const [values, setValues] = useState({
    game: '',
    name: '',
    episode: true,
    preview: true,
  });
  useEffect(() => {
    setValues((pre) => ({ ...pre, name: edit.name }));
  }, [edit.name]);
  return (
    <span
      className={`w-full overflow-scroll transition-all scale-0 absolute top-0 left-0 flex items-start justify-center h-full  bg-black ${
        edit.bol && ' scale-100'
      }`}
    >
      <div className="w-full md:p-8   md:w-[60%] h-full flex flex-col justify-start items-start  ">
        <h2 className="text-white self-stretch md:text-5xl text-3xl border-b-2 pb-3 border-zinc-600">
          Edit Profile
        </h2>
        <div className="h-[130px] gap-3 px-4 pt-3 w-full flex items-start">
          <Image
            className="h-[100px] w-[100px]"
            src={stranger}
            alt="user image"
          />
          <div className="h-full gap-2 flex-grow flex flex-col">
            <input
              className="bg-zinc-600 text-white py-2 w-full outline-none border-none p-3"
              type="text"
              value={values.name}
              aria-label="name"
              onInput={(e) =>
                setValues((pre) => ({ ...pre, name: e.target.value }))
              }
            />
            <span className="text-zinc-300">Language:</span>
            <span className="flex text-zinc-300 items-center gap-2 border-2 self-start px-6">
              English <AiFillCaretDown />
            </span>
          </div>
        </div>
        <div className="text-zinc-300 pb-3 border-b-2 border-zinc-500 pr-3 mt-4 flex items-start flex-col gap-2 self-end w-[75%]">
          <h5 className="text-[.5rem] md:text-[.9rem]">Game Handle:</h5>
          <label className="text-[.4rem] md:text-[.9rem]" htmlFor="game">
            Your handle is a unique name that will be used for playing with
            other Netflix members across all Netflix Games
          </label>
          <input
            id="game"
            value={values.game}
            onInput={(e) =>
              setValues((pre) => ({ ...pre, game: e.target.value }))
            }
            minLength={2}
            maxLength={16}
            className="peer self-stretch bg-zinc-600 invalid:border-2 invalid:border-red-700 p-3 outline-none "
            type="text"
            placeholder="Create Game Handle"
            aria-label="game handle"
          />
          <span className="text-[.5rem] peer-invalid:text-red-500 self-end">
            {' '}
            {values.game.length}/16
          </span>
          <span className=" peer-invalid:flex hidden gap-1 items-center text-red-500">
            <AiOutlineWarning /> Must be longer than 2 characters
          </span>
        </div>
        <div className="text-zinc-300 md:pb-12  pb-3 border-b-2 border-zinc-500 pr-3 mt-4 flex items-start flex-col gap-2 self-end w-[75%]">
          <h3 className="text-2xl">Maturity settings: </h3>
          <span className="bg-zinc-500/50 rounded-md p-3">
            All Maturity Ratings
          </span>
          <span className="text-sm">
            Show titles of all maturity ratings for this profile.
          </span>
          <Link className="border-2 border-zinc-400 px-5 py-1" href="#">
            Edit
          </Link>
        </div>
        <div className="text-zinc-300 pb-3 md:mb-12 pr-3 mt-4 flex items-start flex-col gap-5 self-end w-[75%]">
          <h3 className="text-2xl">Autoplay controls</h3>
          <span className="flex items-center gap-2">
            <input
              id="episode"
              type="checkbox"
              className="hidden"
              checked={values.episode}
              onChange={() =>
                setValues((pre) => ({ ...pre, episode: !values.episode }))
              }
              aria-label="autoplay next episode"
            />
            <label
              className="border-zinc-500 h-9 w-9 flex items-center justify-center border-2 p-1 text-2xl"
              htmlFor="episode"
            >
              {' '}
              {values.episode && <BiCheck />}
            </label>
            <label htmlFor="episode">
              Autoplay next episode in series on all devices.
            </label>
          </span>
          <span className="flex items-center gap-2">
            <input
              id="preview"
              className="hidden"
              type="checkbox"
              onChange={() =>
                setValues((pre) => ({ ...pre, preview: !values.preview }))
              }
              checked={values.preview}
              aria-label="autoplay next episode"
            />
            <label
              className="border-zinc-500  h-9 w-9 flex items-center justify-center border-2 p-1 text-2xl"
              htmlFor="preview"
            >
              {values.preview && <BiCheck />}
            </label>
            <label htmlFor="preview">
              Autoplay previews while browsing on all devices.
            </label>
          </span>
        </div>
        <div className="border-t-2 py-3 px-5 self-stretch flex gap-5 border-zinc-500">
          <button
            onClick={handleClick}
            className="hover:text-white bg-white text-black hover:bg-red-500  px-9 p-3 cursor-pointer"
            href={'/profilesGate'}
          >
            Done
          </button>
          <button
            onClick={handleClick}
            className="hover:text-white text-zinc-400 border-2 hover:border-white  border-zinc-400 px-9 p-3  cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </span>
  );
}
