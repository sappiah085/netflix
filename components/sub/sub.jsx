import { IoIosArrowForward } from 'react-icons/io';
export default function Sub() {
  return (
    <>
      <h2 className="md:text-2xl text-xl  brightness-200 text-white">
        Ready to watch? Enter your email to create or restart your membership.
      </h2>
      <form className=" gap-3 flex  md:w-6/12 w-full justify-center items-center">
        {' '}
        <span className="md:w-4/6 w-2/3   relative">
          <input
            id="email"
            autoComplete="true"
            type="email"
            className="peer  p-4 bg-white rounded-sm w-full outline-none border-none "
            aria-label="email"
          />
          <label
            htmlFor="email"
            className="absolute transition-all peer-focus-within:-translate-y-4 peer-focus-within:scale-0.4 left-5 top-4 text-slate-400"
          >
            {' '}
            Email address
          </label>
        </span>
        <button
          type="submit"
          className=" py-4 border-none flex-nowrap  flex items-center px-2 md:px-5 hover:bg-[#ff0000c3] rounded-md bg-red-600 text-white border-red-600 border"
        >
          Get Started <IoIosArrowForward />
        </button>
      </form>
    </>
  );
}
